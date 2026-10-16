import { useState, useEffect, useRef } from "react";

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(null);
  const elementRef = useRef(null);
  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { root, rootMargin, threshold });

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [root, rootMargin, threshold]);

  return [elementRef, isIntersecting];
}
