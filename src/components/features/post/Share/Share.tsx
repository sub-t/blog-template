import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { MdShare } from 'react-icons/md';
import { ROOT_URL, SITE_NAME, TWITTER_ACCOUNT } from '@/config/app';
import { PostType } from '@/types/post';

type Props = {
  post: PostType;
};

const SIZE = 40;

export const Share: React.VFC<Props> = ({ post }) => {
  const { title, slug, ogImage } = post;

  const url = `${ROOT_URL}/posts/${slug}`;
  const config = { title, url };

  const tags = post.tags.map((tag) => tag.split(' ')[0]);

  const twitter_account = process.env.TWITTER_ACCOUNT as string;

  return (
    <div className="select-none vstack gap-3 p-6 bg-primary-1">
      <div className="center gap-2 py-2 px-3 text-lg font-bold text-primary-1 uppercase">
        <MdShare />
        share
      </div>

      <div className="w-full center gap-4">
        <HatenaShareButton {...config}>
          <HatenaIcon size={SIZE} round />
        </HatenaShareButton>
        <TwitterShareButton
          title={title}
          url={url}
          via={TWITTER_ACCOUNT}
          related={[SITE_NAME, 'Next.js']}
          hashtags={tags}
        >
          <TwitterIcon size={SIZE} round />
        </TwitterShareButton>
        <FacebookShareButton {...config}>
          <FacebookIcon size={SIZE} round />
        </FacebookShareButton>
      </div>
    </div>
  );
};
