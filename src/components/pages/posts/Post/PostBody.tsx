import markdownStyles from './styles/markdown-styles.module.css';

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  return (
    <div className="post max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
