import { Tags } from '@/components/pages/tags';
import { getAllPosts } from '@/lib/api';

type Props = {
  tags: string[];
};

const View = ({ tags }: Props) => {
  return <Tags tags={tags} />;
};

export default View;

export const getStaticProps = async () => {
  let tags = getAllPosts(['tags']).flatMap(({ tags }) => tags);
  tags = Array.from(new Set(tags));

  return {
    props: { tags },
  };
};
