import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

const getBreakpoint = (width) => {
  if (width >= 1600) return '6xl';
  if (width >= 1440) return '5xl';
  if (width >= 1200) return '4xl';
  if (width >= 1024) return '3xl';
  if (width >= 900) return '2xl';
  if (width >= 768) return 'xl';
  if (width >= 768) return 'l';
  if (width >= 600) return 'm';
  if (width >= 360) return 's';
  return 'xs';
};

export default useBreakpoint;
