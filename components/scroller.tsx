"use client"

import styles from "@/components/scroller.module.css"
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { useRef } from 'react';

export default function Scroller ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const leftBtnRef = useRef<HTMLButtonElement | null>(null);
  // const rightBtnRef = useRef<HTMLButtonElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft -= 1540;
    }
  };

  const scrollRight = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += 1540;
    }
  };

  return (
    <div className={styles.container}>
    {/* <div> */}
      <button onClick={scrollLeft} aria-label="Scroll left">
        <ChevronLeftCircle size={25} className={styles.chevron_left}/>
      </button>

      <div ref={cardsRef} className={styles.cards}>
        {children}
      </div>

      <button onClick={scrollRight} aria-label="Scroll right">
        <ChevronRightCircle size={25} className={styles.chevron_right}/>
      </button>
    </div>
  );
};

