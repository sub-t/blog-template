import { paginationOffset } from '@/components/features/Pagination/config';
import { getMaxPage } from '@/components/features/Pagination/utils';
import { Page } from '@/components/pages/posts/page';
import { getAllPosts, postNum } from '@/lib/api';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
  maxPage: number;
};

const View = (props: Props) => {
  return <Page {...props} />;
};

export default View;

type Params = {
  params: {
    page: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const page = Number(params.page);

  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]).slice((page - 1) * paginationOffset, page * paginationOffset);

  return {
    props: { posts, maxPage: getMaxPage(postNum) },
  };
};

export async function getStaticPaths() {
  const pages = Array.from({
    length: getMaxPage(postNum),
  }).map((_, idx) => (idx + 1).toString());

  return {
    paths: pages.map((page) => {
      return {
        params: {
          page,
        },
      };
    }),
    fallback: false,
  };
}
