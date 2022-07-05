import Head from 'next/head';
import { Contents } from '@/components/app/Contents';
import { Profile } from '@/components/app/Profile';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { PostType } from '@/types/post';
import { Toc } from '../../app/Toc';
import { Post } from './Post';

type Props = {
  post: PostType;
};

export const Posts: React.VFC<Props> = ({ post }) => {
  const lg = useBreakPoint('lg');

  return (
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
          {lg ? (
            <div className="sticky top-20">
              <Toc />
            </div>
          ) : null}
        </div>
      }
    />
  );
};
