import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiTag } from 'react-icons/fi';
import { LinkType } from '@/types/link';

export const links: LinkType[] = [
  { name: 'tags', href: '/tags', icon: <FiTag /> },
  { name: 'about', href: '/about', icon: <AiOutlineInfoCircle /> },
];
