import { Profile } from '@/components/app/Profile';
import { PostType } from '@/types/post';
import { Stories } from '../../app/Stories';

type Props = {
  posts: PostType[];
};

export const Home = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <main>
          <div className="p-8 mb-12 bg-base-style">
            <Stories posts={posts} />
          </div>
        </main>
      </div>
      <aside>
        <Profile />
      </aside>
    </div>
  );
};
