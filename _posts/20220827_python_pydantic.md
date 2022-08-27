---
title: 'pydantic のススメ'
excerpt: 'Python で環境変数を読むときに、「pydantic」を使うと便利です。「python-dotenv」と比較した上で「pydantic」の便利な点について紹介します。'
coverImage: '/assets/blog/20220827_python_pydantic/python-logo.png'
date: '2022-08-27'
ogImage:
  url: '/assets/blog/20220827_python_pydantic/python-logo.png'
tags:
  - 'python'
---

## 概要

この記事は、Python のライブラリ紹介記事です。環境変数の読み込み方法はいくつかありますが、まず、python-dotenv の使用例を紹介し、次に pydantic の使い方について紹介します。

## dotenv

dotenv は環境変数などを読み込むために使用します。例えば、DB へのコネクションを作るために各種パラメータを python-dotenv を使って読み込みます。

### setup

```bash
pip install python-dotenv
```

### コード例

`.env`

```bash
host=host_name
port=1234
database=hoge_db
db_user=my_user
password=my_password
```

`dotenv_sample.py`

```python
import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

host = os.environ.get("host")
port = os.environ.get("port")
database = os.environ.get("database")
db_user = os.environ.get("db_user")
password = os.environ.get("password")

params = {
    "host": host,
    "port": port,
    "database": database,
    "user": db_user,
    "password": password
}

print(params)
```

### 実行結果

このプログラムの実行結果が下記です。

```
{
  'host': 'host_name',
  'port': '1234',
  'database': 'hoge_db',
  'user': 'my_user',
  'password': 'my_password'
}
```

このパラメータを使って DB とのコネクションを作成したところ、port が文字列のため TypeError となってしまいました。int でキャストするのはイケてない気がしたので何か方法がないか調べたところ、python-dotenv をラップして型定義ができる pydantic というライブラリがあることを知りました。

## pydantic

### setup

```bash
pip install pydantic
```

### コード例

pydantic は最初に class と型を書き、.env のパスを指定します。そして、インスタンスを生成するだけで環境変数が読み込まれます。dotenv と比べると、必要な情報を一箇所にまとめられるのでとても良いと思いました。

`pydantic_sample.py`

```python
from pydantic import BaseSettings
from os.path import join, dirname

class Settings(BaseSettings):
    host: str
    port: int
    database: str
    db_user: str
    password: str

    class Config:
        env_file = join(dirname(__file__), '.env')

settings = Settings()

params = {
    "host": settings.host,
    "port": settings.port,
    "database": settings.database,
    "user": settings.db_user,
    "password": settings.password
}

print(params)
```

### 実行結果

```
{
  'host': 'host_name',
  'port': 1234,
  'database': 'hoge_db',
  'user': 'my_user',
  'password': 'my_password'
}
```

## まとめ

今回は pydantic の使用例について書きました。pydantic は class 内に型の定義と、ファイルの読み込み先を指定できます。必要な情報を一箇所にまとめられるのでコードを読む時も助かります。今後は pydantic を使用していきたいと思います。

## 参考

- [pydantic docs](https://pydantic-docs.helpmanual.io/)
- [Python で環境変数を読み込むときは pydantic を使うと便利](https://qiita.com/ninomiyt/items/ee676d7f9b780b1d44e8)
- [python-dotenv を使って環境変数を設定する](https://qiita.com/harukikaneko/items/b004048f8d1eca44cba9)
