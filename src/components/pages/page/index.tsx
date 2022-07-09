import { useRouter } from 'next/router';
import { Contents } from '@/components/common/Contents';
import { Pagination } from '@/components/common/Pagination';
import { Profile } from '@/components/common/Profile';
import { Stories } from '@/components/common/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
  maxPage: number;
};

export const Page: React.VFC<Props> = ({ posts, maxPage }) => {
  const currentPage = Number(useRouter().query.page);

  return (
    <Contents
      main={
        <div className="vstack gap-10 p-8 bg-primary-1">
          <Stories posts={posts} />
          <Pagination maxPage={maxPage} currentPage={currentPage} />
        </div>
      }
      aside={<Profile />}
    />
  );
};
