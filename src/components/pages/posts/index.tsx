import Head from 'next/head';
import { Contents } from '@/components/app/Contents';
import { Profile } from '@/components/app/Profile';
import { PostType } from '@/types/post';
import { Post } from './Post';
import { Toc } from './Toc';

type Props = {
  post: PostType;
};

export const Posts: React.VFC<Props> = ({ post }) => (
  <Contents
    main={
      <article>
        <Head>
          <title>{post.title}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>
        <Post post={post} />
      </article>
    }
    aside={
      <div className="vstack gap-6 h-full">
        <Profile />
        <div className="hidden lg:block lg:top-20 lg:sticky">
          <Toc />
        </div>
      </div>
    }
  />
);
