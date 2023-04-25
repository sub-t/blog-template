import { Posts } from '@/components/pages/posts';
import { getPostBySlug, getAllPosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

type Props = React.ComponentPropsWithoutRef<typeof Posts>;

const View: React.VFC<Props> = (props: Props) => <Posts {...props} />;

export default View;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt',
    'tags',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
