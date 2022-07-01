import Head from 'next/head';
import { PostType } from '@/types/post';
import { Post } from './Post';

type Props = {
  post: PostType;
};

export const Posts: React.VFC<Props> = ({ post }) => (
  <article className="mb-16">
    <Head>
      <title>{post.title}</title>
      <meta property="og:image" content={post.ogImage.url} />
    </Head>
    <Post post={post} />
  </article>
);
