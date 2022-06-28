import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Post } from '@/components/posts/Post';
import { getPostBySlug, getAllPosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import type { PostType } from '@/types/post';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const View = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <article className="mb-32">
      <Head>
        <title>{post.title}</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <Post post={post} />
    </article>
  );
};

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
