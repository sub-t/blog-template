import React from 'react';
import { Link } from './Link';

type Props = React.ComponentPropsWithoutRef<typeof Link> & {
  condition: boolean;
};

export const ConditionalLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  Props
>(({ children, href, condition, ...props }, forwardedRef) => (
  <>
    {condition ? (
      <Link href={href} passHref {...props} ref={forwardedRef}>
        <a>{children}</a>
      </Link>
    ) : (
      <>{children}</>
    )}
  </>
));

ConditionalLink.displayName = 'ConditionalLink';
