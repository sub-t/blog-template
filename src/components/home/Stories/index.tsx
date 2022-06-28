import { Story } from './Story';
import type { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Stories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-32">
        {posts.map((post) => (
          <Story
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};
