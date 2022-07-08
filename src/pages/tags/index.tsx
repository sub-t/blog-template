import { Tags } from '@/features/tags';
import { getAllPosts } from '@/lib/api';

type Props = React.ComponentPropsWithoutRef<typeof Tags>;

const View: React.VFC<Props> = (props: Props) => <Tags {...props} />;

export default View;

export const getStaticProps = async () => {
  let tags = getAllPosts(['tags']).flatMap(({ tags }) => tags);
  tags = Array.from(new Set(tags));

  return {
    props: { tags },
  };
};
