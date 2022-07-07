import Link from 'next/link';
import { Profile } from '@/components/features/Profile';
import { Stories } from '@/components/features/Stories';
import { Contents } from '@/components/pages/app';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <Contents
      main={
        <div className="p-8 bg-base-style">
          <Stories posts={posts} />
          {/* TODO */}
          <Link href="posts/page/1" passHref>
            <a>もっと見る</a>
          </Link>
        </div>
      }
      aside={<Profile />}
    />
  );
};
