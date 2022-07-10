import { RiTimeFill } from 'react-icons/ri';
import { DateFormatter } from '@/components/material/DateFormatter';

type Props = {
  date: string;
};

export const Date: React.VFC<Props> = ({ date }) => (
  <div className="select-none hstack gap-2 text-md font-medium text-accent-1">
    <RiTimeFill />
    <DateFormatter dateString={date} />
  </div>
);
