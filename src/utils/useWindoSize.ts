import { useState, useEffect } from 'react';

const useWindowSize = (size: number) => {
  const [isSizeMatch, setIsSizeMatch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsSizeMatch(innerWidth >= size);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);

  return isSizeMatch;
};

export default useWindowSize;
