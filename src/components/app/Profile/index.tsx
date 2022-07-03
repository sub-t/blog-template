import { SiGithub, SiTwitter, SiZenn } from 'react-icons/si';
import { Image } from '@/components/common/Image';

export const Profile = () => (
  <div className="px-8 py-4 mx-auto bg-white dark:bg-gray-800">
    <div className="flex justify-center">
      <Image
        className="object-cover w-28 h-28 rounded-full"
        alt="subt avatar"
        src="/assets/author.png"
      />
    </div>

    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-semibold text-base-style">subt</h1>

      <p className="text-gray-700 dark:text-gray-400">
        Full Stack maker & UI / UX Designer , love hip hop music Author of
        Building UI.
      </p>

      <div className="flex gap-3">
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
  </div>
);
