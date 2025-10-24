"use client"

import styles from "@/components/scroller.module.css"
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { useRef } from 'react';

export default function Scroller ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cardsRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
        if (!cardsRef.current) return;
        const { clientWidth } = cardsRef.current;
        const scrollAmount = direction === "left" ? -clientWidth * 1 : clientWidth * 1;
        cardsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

  return (
    <div className={styles.container}>
      <button onClick={() => scroll("left")} aria-label="Scroll left">
        <ChevronLeftCircle size={25} className={styles.chevron_left}/>
      </button>

      <div ref={cardsRef} className={styles.cards}>
        {children}
      </div>

      <button onClick={() => scroll("right")} aria-label="Scroll right">
        <ChevronRightCircle size={25} className={styles.chevron_right}/>
      </button>
    </div>
  );
};

