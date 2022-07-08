import Link from 'next/link';
import { AiTwotoneTags } from 'react-icons/ai';
import { RiTimeFill } from 'react-icons/ri';
import { DateFormatter } from '@/components/DateFormatter';
import { Image } from '@/components/Image';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
};

export const PostHeader = ({ title, coverImage, date, tags }: Props) => {
  return (
    <div className="vstack gap-6">
      <Image src={coverImage} alt={`Cover Image for ${title}`} />
      <h1 className="text-base-style text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
      <div className="wrap gap-2">
        <span className="select-none text-base-style">
          <AiTwotoneTags />
        </span>
        {tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`} passHref>
            <a className="badge">{tag}</a>
          </Link>
        ))}
        <span className="select-none hstack gap-2 text-base-style text-sm">
          <RiTimeFill />
          <DateFormatter dateString={date} />
        </span>
      </div>
    </div>
  );
};
