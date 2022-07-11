import { NextSeo } from 'next-seo';
import { Contents } from '@/components/processed/Contents';
import { Post } from '@/components/processed/Post';
import { Profile } from '@/components/processed/Profile';
import { Toc } from '@/components/processed/Toc';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { PostType } from '@/types/post';

type Props = {
  post: PostType;
};

export const Posts: React.VFC<Props> = ({ post }) => {
  const lg = useBreakPoint('lg');
  const rootPath = process.env.NEXT_PUBLIC_ROOT_URL as string;

  return (
    <Contents
      main={
        <article>
          <NextSeo
            title={post.title}
            description={post.excerpt}
            openGraph={{
              url: rootPath,
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
