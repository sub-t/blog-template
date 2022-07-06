import Link from 'next/link';
import { Contents } from '@/components/app/Contents';
import { Profile } from '@/components/app/Profile';
import { Stories } from '@/components/app/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <Contents
      main={
        <div className="p-8 mb-12 bg-base-style">
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
