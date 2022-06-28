import Head from 'next/head';
import { Stories } from '@/components/home/Stories';
import { getAllPosts } from '@/lib/api';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

const Index = ({ posts }: Props) => {
  return (
    <div className="mb-12">
      <Head>
        <title>Next.js Blog Example with MD</title>
      </Head>
      <Stories posts={posts} />
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt']);

  return {
    props: { posts },
  };
};
