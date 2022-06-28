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
    <div className="overflow-hidden shadow-lg rounded-lg cursor-pointer">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="w-full h-full flex">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="w-1/3 h-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-2/3 p-6 flex flex-col gap-2">
            <div className="text-indigo-500 text-md font-medium">
              <DateFormatter dateString={date} />
            </div>
            <h3 className="text-gray-800 dark:text-white text-xl font-medium">
              {title}
            </h3>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md line-clamp-3">
              {excerpt}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};
