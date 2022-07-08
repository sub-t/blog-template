import { Slot } from '@radix-ui/react-slot';
import { Image } from '@/components/Image';
import { sns } from '../config/sns';

export const Profile = () => (
  <div className="select-none vstack items-center gap-5 p-6 bg-base-style">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full bg-white"
        alt="subt avatar"
        src="/assets/author.png"
      />
      <h1 className="text-2xl font-semibold text-base-style">subt</h1>
    </div>

    <p className="text-base-style">
      Full Stack maker & UI / UX Designer , love hip hop music Author of
      Building UI.
    </p>

    <div className="flex gap-4">
      {sns.map(({ icon }, idx) => (
        <Slot key={idx} {...{ size: 20 }} className="text-base-style">
          {icon}
        </Slot>
      ))}
    </div>
  </div>
);
