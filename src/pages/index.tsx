import { Stories } from '@/components/home/Stories';
import { getAllPosts } from '@/lib/api';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

const View = ({ posts }: Props) => {
  return (
    <div className="mb-12">
      <Stories posts={posts} />
    </div>
  );
};

export default View;

export const getStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt']);

  return {
    props: { posts },
  };
};
