import Head from 'next/head';
import { PostType } from '@/types/post';
import { Post } from './Post';
import { Toc } from './Toc';

type Props = {
  post: PostType;
};

export const Posts: React.VFC<Props> = ({ post }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <div className="lg:col-span-2">
      <main>
        <article className="mb-16">
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <Post post={post} />
        </article>
      </main>
    </div>
    <aside>
      <Toc />
    </aside>
  </div>
);
