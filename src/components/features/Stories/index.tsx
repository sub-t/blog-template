import { PostType } from '@/types/post';
import { Story } from './Story';

type Props = {
  posts: PostType[];
};

export const Stories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="text-base-style mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        Stories
      </h2>
      <div className="grid grid-cols-1 gap-10">
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
