"use client"

import styles from "./scroller.module.css"
import { ChevronRightCircle } from 'lucide-react';
import { useRef } from 'react';

const ScrollerRight: React.FC = () => {
  const rightBtnRef = useRef<HTMLButtonElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += 1540;
    }
  };

  return (
    // <div ref={cardsRef} className={styles.cards}>
    <div ref={cardsRef}>
      <button onClick={scrollRight} aria-label="Scroll right">
        <ChevronRightCircle size={25} className={styles.bi_chevron_right}/>
      </button>
      </div>
  );
};

export default ScrollerRight; // Make sure this line is present.
