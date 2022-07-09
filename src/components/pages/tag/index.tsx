import { Contents } from '@/components/processed/Contents';
import { Profile } from '@/components/processed/Profile';
import { Stories } from '@/components/processed/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Tag: React.VFC<Props> = ({ posts }) => {
  return (
    <Contents
      main={
        <div className="p-8 bg-primary-1">
          <Stories posts={posts} />
        </div>
      }
      aside={<Profile />}
    />
  );
};
