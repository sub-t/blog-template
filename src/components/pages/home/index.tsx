import Link from 'next/link';
import { Contents } from '@/components/common/Contents';
import { MoreButton } from '@/components/common/MoreButton';
import { Profile } from '@/components/common/Profile';
import { Stories } from '@/components/common/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <Contents
      main={
        <div className="vstack gap-12 p-8 bg-primary-1">
          <Stories posts={posts} />
          {/* TODO */}
          <Link href="posts/page/1" passHref>
            <a>
              <MoreButton />
            </a>
          </Link>
        </div>
      }
      aside={<Profile />}
    />
  );
};
