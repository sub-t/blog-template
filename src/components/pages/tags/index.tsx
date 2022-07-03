import { PostType } from '@/types/post';
import { Stories } from '../../app/Stories';

type Props = {
  posts: PostType[];
};

export const Tags = ({ posts }: Props) => {
  return (
    <main>
      <div className="p-8 mb-12 bg-base-style">
        <Stories posts={posts} />
      </div>
    </main>
  );
};
