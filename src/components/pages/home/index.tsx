import { DefaultContents } from '@/components/app/Contents/DefaultContents';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return <DefaultContents posts={posts} />;
};
