"use client"

import styles from "./scroller.module.css"
import { ChevronLeftCircle } from 'lucide-react';
import { useRef } from 'react';

const ScrollerLeft: React.FC = () => {
  const leftBtnRef = useRef<HTMLButtonElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft -= 1540;
    }
  };

  return (
      <button onClick={scrollLeft} aria-label="Scroll left">
        <ChevronLeftCircle size={25} className={styles.bi_chevron_left}/>
      </button>
  );
};

export default ScrollerLeft; // Make sure this line is present.
