import { Tags } from '@/components/pages/tags';
import { getAllPosts } from '@/lib/api';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

const View = ({ posts }: Props) => {
  return <Tags posts={posts} />;
};

export default View;

type Params = {
  params: {
    tag: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'tags',
  ]).filter((post) => post.tags?.includes(params.tag));

  return {
    props: { posts },
  };
};

export async function getStaticPaths() {
  const tags = getAllPosts(['tags']).flatMap((post) => post.tags);

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag,
        },
      };
    }),
    fallback: false,
  };
}
