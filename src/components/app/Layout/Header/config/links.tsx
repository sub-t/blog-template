import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiTag } from 'react-icons/fi';
import { LinkType } from '@/types/link';

export const links: LinkType[] = [
  { name: 'tags', href: '/', icon: <FiTag /> },
  { name: 'about', href: '/', icon: <AiOutlineInfoCircle /> },
];
