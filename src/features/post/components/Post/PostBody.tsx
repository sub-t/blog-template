import markdownStyles from './styles/markdown-styles.module.css';

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  return (
    <div className="post">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
