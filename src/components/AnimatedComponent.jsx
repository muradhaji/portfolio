import React, { useEffect, useRef, useState } from 'react';

function AnimatedComponent({ children }) {
  let [isInView, setIsInView] = useState(false);
  let ref = useRef(null);

  const observerCallback = ([entry]) => {
    setIsInView(entry.isIntersecting);
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    let { current } = ref;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
    // eslint-disable-next-line
  }, []);

  return React.createElement('div', {
    className: isInView ? 'animated' : '',
    children,
    ref,
  });
}

export default AnimatedComponent;
