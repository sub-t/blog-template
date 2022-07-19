import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { Stories } from '@/components/features/post/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Tag: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div className="p-8 bg-primary-1">
          <Stories posts={posts} />
        </div>
      }
      aside={<Profile />}
    />
  );
};
