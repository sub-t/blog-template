import { Contents } from '@/features/app';
import { Profile } from '@/features/profile/components/Profile';
import { Stories } from '@/features/stories/components/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Tag: React.VFC<Props> = ({ posts }) => {
  return (
    <Contents
      main={
        <div className="p-8 bg-base-style">
          <Stories posts={posts} />
        </div>
      }
      aside={<Profile />}
    />
  );
};
