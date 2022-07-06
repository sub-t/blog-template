import { Contents } from '@/components/app/Contents';
import { Profile } from '@/components/app/Profile';
import { Stories } from '@/components/app/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Tags: React.VFC<Props> = ({ posts }) => {
  return (
    <Contents
      main={
        <div className="p-8 mb-12 bg-base-style">
          <Stories posts={posts} />
        </div>
      }
      aside={<Profile />}
    />
  );
};
