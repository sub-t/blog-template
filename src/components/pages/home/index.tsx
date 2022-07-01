import { PostType } from '@/types/post';
import { Stories } from '../../app/Stories';

type Props = {
  posts: PostType[];
};

export const Home = ({ posts }: Props) => {
  return (
    <div className="mb-12">
      <Stories posts={posts} />
    </div>
  );
};
