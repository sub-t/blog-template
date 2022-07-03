import { useEffect } from 'react';
import tocbot from 'tocbot';

export const Toc: React.VFC = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      headingSelector: 'h1, h2, h3',
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="relative h-full">
      <nav className="toc sticky top-1/2 -translate-y-1/2" />
    </div>
  );
};
