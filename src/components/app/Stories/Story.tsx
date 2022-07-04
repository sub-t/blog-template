import Link from 'next/link';
import { DateFormatter } from '../../common/DateFormatter';
import { Image } from '../../common/Image';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const Story = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className="select-none overflow-hidden w-full h-full flex flex-col md:flex-row cursor-pointer focus:outline-2 ">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className="w-full md:w-1/3 h-48 md:h-full object-cover"
        />
        <div className="md:w-2/3 p-4 md:p-6 flex flex-col gap-2 bg-base-style">
          <div className="text-indigo-500 text-md font-medium">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="text-base-style text-xl font-medium">{title}</h3>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md line-clamp-2 md:line-clamp-3">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
};
