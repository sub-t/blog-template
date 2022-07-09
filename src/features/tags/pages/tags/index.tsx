import Link from 'next/link';
import { AiTwotoneTags } from 'react-icons/ai';
import { Contents } from '@/features/app';
import { Profile } from '@/features/profile/components/Profile';

type Props = {
  tags: string[];
};

export const Tags: React.VFC<Props> = ({ tags }) => {
  return (
    <Contents
      main={
        <div className="vstack gap-10 p-8 bg-primary-1">
          <div className="center">
            <h2 className="center gap-2 py-2 px-3 border-b-2 border-teal-800 dark:border-teal-400 text-xl font-bold text-primary-1">
              <AiTwotoneTags />
              タグ
            </h2>
          </div>

          <div className="wrap gap-3">
            {tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} passHref>
                <a className="badge">{tag}</a>
              </Link>
            ))}
          </div>
        </div>
      }
      aside={<Profile />}
    />
  );
};
