import { Contents } from '@/components/common/Contents';
import { Profile } from '@/components/common/Profile';
import { Stories } from '@/components/common/Stories';
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
