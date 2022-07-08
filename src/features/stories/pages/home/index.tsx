import Link from 'next/link';
import { Contents } from '@/features/app';
import { Profile } from '@/features/profile/components/Profile';
import { Stories } from '@/features/stories/components/Stories';
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
