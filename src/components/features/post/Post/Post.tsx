import { PostType } from '@/types/post';
import { PostBody } from './PostBody';
import { PostHeader } from './PostHeader';

type Props = {
  post: PostType;
};

export const Post: React.VFC<Props> = ({ post }) => {
  const { title, coverImage, date, tags, content } = post;

  return (
    <div className="p-8 bg-primary-1 rounded-lg">
      <PostHeader
        title={title}
        coverImage={coverImage}
        date={date}
        tags={tags}
      />
      <PostBody content={content} />
    </div>
  );
};
