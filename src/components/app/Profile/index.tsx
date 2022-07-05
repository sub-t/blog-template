import { SiGithub, SiTwitter, SiZenn } from 'react-icons/si';
import { Image } from '@/components/common/Image';

export const Profile = () => (
  <div className="vstack items-center gap-5 p-6 bg-base-style">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full bg-white"
        alt="subt avatar"
        src="/assets/author.png"
      />
      <h1 className="text-2xl font-semibold text-base-style">subt</h1>
    </div>

    <p className="text-gray-700 dark:text-gray-400">
      Full Stack maker & UI / UX Designer , love hip hop music Author of
      Building UI.
    </p>

    <div className="flex gap-4">
      <div className="text-base-style">
        <SiZenn size={20} />
      </div>

      <div className="text-base-style">
        <SiGithub size={20} />
      </div>

      <div className="text-base-style">
        <SiTwitter size={20} />
      </div>
    </div>
  </div>
);
