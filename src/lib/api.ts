import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { paginationOffset } from '@/config/pagination';
import { PostType } from '@/types/post';

const postsDirectory = join(process.cwd(), '_posts').replaceAll('\\', '/');

export const getPostSlugs = () => fs.readdirSync(postsDirectory);

export const getMaxPage = () => {
  const postNum = getPostSlugs().length;
  return Math.ceil(postNum / paginationOffset);
};

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items as Partial<PostType>;
};

type Field = keyof PostType;

export const getAllPosts = (fields: Field[] = []) => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1));
  return posts;
};
