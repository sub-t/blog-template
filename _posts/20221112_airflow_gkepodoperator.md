---
title: 'Airflow GKEPodOperator で Service Account をどうやって指定するか'
excerpt: 'GKEPodOperator で Pod を起動する際に、どうやって KSA_NAME を指定するか説明します'
coverImage: '/assets/blog/20221112_airflow_gkepodoperator/airflow.png'
date: '2022-11-12'
ogImage:
  url: '/assets/blog/20221112_airflow_gkepodoperator/airflow.png'
tags:
  - 'airflow'
---

## 概要

この記事は、Airflow で GKEPodOperator で Service Account をどうやって指定するか説明します。

## モチベーション

通常、GKEPodOperator を使用すると、Node Pool に紐づく Google Service Account の権限で処理を実行します。
その場合、Node Pool 全体が同じ権限になってしまい、権限を分けるためには権限の数だけ Node Pool を作ることになってしまいます。
それを避けるために Workload Identity を使用します。

## Workload Identity

Workload Identity では Kubernetes Service Account と Google Service Account を紐付けます。起動する Pod に対して特定の Service Account を割り当てることで、Kubernetes Service Account ⇔ Google Service Account と紐付き、Node Pool とは別の権限を振ることができます。

詳細は下記のドキュメントを参照してください。

[https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)

## Airflow からどうやって Kubernetes Service Account を指定するか

最初に言ってしまうと、[こちら](https://stackoverflow.com/questions/66970409/passing-serviceaccount-in-airflow-kubernetes-pod-operator) に回答が書いてあります。

---

> The KubernetesPodOperator contains a parameter service_account_name with which which you can specify the K8s service account. It is available for both Airflow v2 and v1.10, the latter is just not documented.

> Example call (mostly taken from [https://airflow.apache.org/docs/apache-airflow-providers-cncf-kubernetes/stable/operators.html](https://airflow.apache.org/docs/apache-airflow-providers-cncf-kubernetes/stable/operators.html)):

```
quay_k8s = KubernetesPodOperator(
    namespace='default',
    image='quay.io/apache/bash',
    service_account_name="my_k8s_svc_acct",
    cmds=["bash", "-cx"],
    name="airflow-private-image-pod",
    task_id="task-two",
)
```

---

Airflow 2 系と 1.10 以降で service_account_name を指定できるようです。

実際にソースコードを確認すると、

GKEPodOperator は KubernetesPodOperator を継承している。
![](/assets/blog/20221112_airflow_gkepodoperator/GKEPodOperator.png)

KubernetesPodOperator の init を見ると
![](/assets/blog/20221112_airflow_gkepodoperator/KubernetesPodOperator.png)

確かに service_account_name を指定できそうです。
※ 実環境で実行できるか試していません

## まとめ

Airflow から GKEPodOperator 使用時に Kubernetes Service Account を利用するには、GKEPodOperator 使用時に service_account_name を指定するとなります。
