import { Contents } from '@/components/app/Contents';
import { Pagination } from '@/components/app/Pagination';
import { Profile } from '@/components/app/Profile';
import { Stories } from '@/components/app/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
  maxPage: number;
};

export const Page: React.VFC<Props> = ({ posts, maxPage }) => (
  <Contents
    main={
      <div className="vstack gap-10 p-8 mb-12 bg-base-style">
        <Stories posts={posts} />
        <Pagination maxPage={maxPage} />
      </div>
    }
    aside={<Profile />}
  />
);
