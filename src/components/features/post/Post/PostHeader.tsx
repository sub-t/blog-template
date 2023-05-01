import { AiTwotoneTags } from 'react-icons/ai';
import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
};

export const PostHeader = ({ title, coverImage, date, tags }: Props) => {
  return (
    <div className="vstack gap-4">
      <div className="w-full h-64 sm:h-80">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-primary-1 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
      <div className="wrap gap-4">
        <Date date={date} />
        <div className="wrap gap-2">
          <span className="select-none text-primary-1">
            <AiTwotoneTags />
          </span>
          {tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} passHref>
              <a className="badge rounded">{tag}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
