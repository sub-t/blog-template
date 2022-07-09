import { Contents } from '@/components/features/app';
import { Profile } from '@/components/features/profile';
import { Stories } from '@/components/features/stories';
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
