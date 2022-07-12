import { NextSeo } from 'next-seo';
import { Contents } from '@/components/features/app/Contents';
import { Profile } from '@/components/features/app/Profile';
import { Post } from '@/components/features/post/Post';
import { Toc } from '@/components/features/post/Toc';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { useRootPath } from '@/hooks/useRootPath';
import { PostType } from '@/types/post';

type Props = {
  post: PostType;
};

export const Posts: React.VFC<Props> = ({ post }) => {
  const lg = useBreakPoint('lg');
  const rootPath = useRootPath();

  return (
    <Contents
      main={
        <article>
          <NextSeo
            title={post.title}
            description={post.excerpt}
            openGraph={{
              url: process.env.NEXT_PUBLIC_ROOT_URL,
              title: post.title,
              description: post.excerpt,
              images: [
                {
                  url: rootPath + post.ogImage.url,
                },
              ],
            }}
          />
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
