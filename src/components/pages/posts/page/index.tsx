import { Contents } from '@/components/app/Contents';
import { Profile } from '@/components/features/Profile';
import { Stories } from '@/components/features/Stories';
import { Pagination } from '@/components/features/Pagination';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
  maxPage: number;
};

export const Page: React.VFC<Props> = ({ posts, maxPage }) => (
  <Contents
    main={
      <div className="vstack gap-10 p-8 bg-base-style">
        <Stories posts={posts} />
        <Pagination maxPage={maxPage} />
      </div>
    }
    aside={<Profile />}
  />
);
