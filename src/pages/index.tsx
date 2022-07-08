import { Home } from '@/features/stories';
import { getAllPosts } from '@/lib/api';

type Props = React.ComponentPropsWithoutRef<typeof Home>;

const View: React.VFC<Props> = (props: Props) => <Home {...props} />;

export default View;

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]).slice(0, 4);

  return {
    props: { posts },
  };
};
