import { SidebarSettings } from './SidebarSettings';
import Link from 'next/link';
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  FacebookLogoIcon,
  LinkedinLogoIcon,
} from '@radix-ui/react-icons';
import { FC } from 'react';

export const SidebarFooter: FC = () => {
  return (
    <div className="flex flex-row items-center gap-2 border-t border-neutral-600 pr-2 pt-2">
      <SidebarSettings />
      <Link
        href="#"
        target="_blank"
        className="hover:opacity-50"
      >
        <QuestionMarkCircledIcon />
      </Link>
      <Link
        href="https://twitter.com/funnelfixit"
        target="_blank"
        className="hover:opacity-50"
      >
        <TwitterLogoIcon />
      </Link>
      <Link
        href="https://facebook.com/ghltools"
        target="_blank"
        className="hover:opacity-50"
      >
        <FacebookLogoIcon />
      </Link>
      <Link
        href="https://linkedin.com/in/nathandshearer"
        target="_blank"
        className="hover:opacity-50"
      >
        <LinkedinLogoIcon />
      </Link>
    </div>
  );
};
