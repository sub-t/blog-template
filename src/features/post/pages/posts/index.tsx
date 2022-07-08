import Head from 'next/head';
import { Contents } from '@/features/app';
import { Profile } from '@/features/profile/components/Profile';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { PostType } from '@/types/post';
import { Toc } from '../../../toc/components/Toc';
import { Post } from '../../components/Post';

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
