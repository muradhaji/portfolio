import React, { useEffect, useRef, useState } from 'react';

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

function AnimatedComponent({ children }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, observerOptions);

    const { current } = ref;

    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, []);

  return React.createElement('div', {
    className: isInView ? 'animated' : '',
    children,
    ref,
  });
}

export default AnimatedComponent;
