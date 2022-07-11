import Head from 'next/head';
import { Contents } from '@/components/processed/Contents';
import { Post } from '@/components/processed/Post';
import { Profile } from '@/components/processed/Profile';
import { Toc } from '@/components/processed/Toc';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { useRoutePath } from '@/hooks/useRoutePath';
import { PostType } from '@/types/post';

type Props = {
  post: PostType;
};

export const Posts: React.VFC<Props> = ({ post }) => {
  const lg = useBreakPoint('lg');
  const routePath = useRoutePath();

  return (
    <Contents
      main={
        <article>
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={routePath + post.ogImage.url} />
          </Head>
          <Post post={post} />
        </article>
      }
      aside={
        <div className="vstack gap-6 h-full">
          <Profile />
          {lg && (
            <div className="sticky top-20">
              <Toc />
            </div>
          )}
        </div>
      }
      hamburgerMenu={
        <div
          role="button"
          tabIndex={0}
          onClick={() =>
            document.dispatchEvent(
              new KeyboardEvent('keydown', { key: 'Escape' }),
            )
          }
          onKeyDown={() => {}}
          className="overflow-y-auto cursor-default"
        >
          <Toc />
        </div>
      }
    />
  );
};
