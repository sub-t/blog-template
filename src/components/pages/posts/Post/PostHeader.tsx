import Link from 'next/link';
import { AiTwotoneTags } from 'react-icons/ai';
import { RiTimeFill } from 'react-icons/ri';
import { DateFormatter } from '../../../common/DateFormatter';
import { Image } from '../../../common/Image';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
};

export const PostHeader = ({ title, coverImage, date, tags }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-base-style text-4xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        <span className='text-base-style'><AiTwotoneTags /></span>
        {tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`} passHref>
            <a className="badge">{tag}</a>
          </Link>
        ))}
        <span className="flex items-center gap-2 text-base-style text-sm">
          <RiTimeFill />
          <DateFormatter dateString={date} />
        </span>
      </div>
      <Image src={coverImage} alt={`Cover Image for ${title}`} />
    </div>
  );
};
