import React, { useEffect, useState } from 'react'

export default function ScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div>현재 스크롤 위치: {scrollPosition.toFixed(2)}px</div>
  );
}
