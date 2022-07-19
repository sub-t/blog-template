import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { MoreButton } from '@/components/features/navigation/MoreButton';
import { Stories } from '@/components/features/post/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div className="vstack gap-12 p-8 bg-primary-1">
          <Stories posts={posts} />
          <Link href="/posts/page/1" passHref>
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
