import React from 'react';
import { useRoutePath } from '@/lib/routePath';

export const Image = React.forwardRef<
  React.ElementRef<'img'>,
  React.ComponentPropsWithoutRef<'img'>
>(({ children, src, alt, ...props }, forwardedRef) => {
  const routePath = useRoutePath();
  const imgPath = routePath + src;

  return (
    <img src={imgPath} alt={alt} {...props} ref={forwardedRef}>
      {children}
    </img>
  );
});

Image.displayName = 'Image';
