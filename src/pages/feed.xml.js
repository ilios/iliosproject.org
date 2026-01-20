import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('post');
  return rss({
    title: 'Ilios',
    description: 'Curriculum Management for the Health Professions',
    site: context.site,
    items: posts.reverse().map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${post.id}/`,
      pubDate: post.data.date,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
      ...post.data,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
