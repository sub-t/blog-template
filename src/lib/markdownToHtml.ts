import rehypePrism from '@mapbox/rehype-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: false, rel: ['nofollow'] })
    .use(rehypePrism)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
