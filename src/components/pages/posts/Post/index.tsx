import { PostType } from '@/types/post';
import { PostBody } from './PostBody';
import { PostHeader } from './PostHeader';

type Props = {
  post: PostType;
};

export const Post: React.VFC<Props> = ({ post }) => {
  return (
    <>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
      />
      <PostBody content={post.content} />
    </>
  );
};
