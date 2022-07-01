import { remark } from 'remark';
import externalLinks from 'remark-external-links';
import gfm from 'remark-gfm';
import html from 'remark-html';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(gfm)
    .use(externalLinks)
    .use(require('remark-prism'))
    .process(markdown);
    
  return result.toString();
}
