import { DateFormatter } from '../../common/DateFormatter';
import { Image } from '../../common/Image';

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <h1 className="text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <Image src={coverImage} alt={`Cover Image for ${title}`} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};
