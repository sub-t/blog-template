import { Home } from '@/components/pages/home';
import { getAllPosts } from '@/lib/api';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

const View = ({ posts }: Props) => {
  return <Home posts={posts} />;
};

export default View;

export const getStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt']);

  return {
    props: { posts },
  };
};
