import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';

export const About = () => (
  <MainLayout className="lg:block" main={<Profile />} />
);
