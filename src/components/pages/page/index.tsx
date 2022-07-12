import { useRouter } from 'next/router';
import { Contents } from '@/components/features/app/Contents';
import { Profile } from '@/components/features/app/Profile';
import { Pagination } from '@/components/features/navigation/Pagination';
import { Stories } from '@/components/features/post/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
  maxPage: number;
};

export const Page: React.VFC<Props> = ({ posts, maxPage }) => {
  const page = Number(useRouter().query.page);

  return (
    <Contents
      main={
        <div className="vstack gap-10 p-8 bg-primary-1">
          <Stories posts={posts} />
          <Pagination count={maxPage} page={page} />
        </div>
      }
      aside={<Profile />}
    />
  );
};
