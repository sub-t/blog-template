import Link from 'next/link';
import { DateFormatter } from '@/components/materials/DateFormatter';
import { Image } from '@/components/materials/Image';

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
      <a className="select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ">
        <div className="center w-full md:w-1/3 md:h-full bg-gray-50 md:bg-transparent">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="max-w-xs h-52 md:h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1">
          <div className="text-accent-1 text-md font-medium">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="text-primary-1 text-xl font-medium">{title}</h3>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md line-clamp-2 md:line-clamp-3">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
};
