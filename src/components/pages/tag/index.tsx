import { useRouter } from 'next/router';
import { FaHashtag } from 'react-icons/fa';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Tag: React.VFC<Props> = ({ posts }) => {
  const tag = useRouter().query.tag;

  return (
    <MainLayout
      main={
        <div className="p-8 bg-primary-1">
          <Stories posts={posts} title={tag} icon={<FaHashtag />} />
        </div>
      }
      aside={<Profile />}
    />
  );
};
