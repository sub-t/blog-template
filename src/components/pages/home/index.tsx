import { RiChatNewLine } from 'react-icons/ri';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div className="vstack gap-12 p-8 bg-primary-1">
          <Stories posts={posts} title="最新の記事" icon={<RiChatNewLine />} />
          <Link href="/posts/page/1" passHref>
            <a className="center gap-2 py-3 px-4 rounded-lg text-md font-normal bg-teal-700 text-white">
              記事一覧へ
            </a>
          </Link>
        </div>
      }
      aside={<Profile />}
    />
  );
};
