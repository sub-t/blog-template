import { NextSeo } from 'next-seo';
import { Contents } from '@/components/features/app/Contents';
import { Profile } from '@/components/features/app/Profile';
import { Post } from '@/components/features/post/Post';
import { Share } from '@/components/features/post/Share';
import { Toc } from '@/components/features/post/Toc';
import { ROOT_URL } from '@/config/app';
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
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          url: ROOT_URL,
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: rootPath + post.ogImage.url,
            },
          ],
        }}
      />
      <Contents
        main={
          <article>
            <Post post={post} />
          </article>
        }
        aside={
          <div className="vstack gap-10 h-full">
            <Profile />
            <div className="vstack gap-10 sticky top-20">
              {lg && <Toc />}
              <Share post={post} />
            </div>
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
    </>
  );
};
