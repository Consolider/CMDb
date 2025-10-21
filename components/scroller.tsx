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

  // -==[ Percentage scroll ]==-
  const scroll = (direction: "left" | "right") => {
        if (!cardsRef.current) return; // If the ref isn’t attached yet, do nothing.
        const { clientWidth } = cardsRef.current;  // clientWidth = visible width of the element.
        const scrollAmount = direction === "left" ? -clientWidth * 1 : clientWidth * 1;  // If direction is left, we move left (-clientWidth); otherwise we move right.
        cardsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });  // Perform the scroll smoothly
    };

  // -==[ Pixel scroll ]==-
  // if (!cardsRef.current) return
  //   const { clientWidth } = cardsRef.current

  // const scrollLeft = () => {
  //   if (cardsRef.current) {
  //     cardsRef.current.scrollLeft -= 1540;
  //   }
  // };

  // const scrollRight = () => {
  //   if (cardsRef.current) {
  //     cardsRef.current.scrollLeft += 1540;
  //   }
  // };

  return (
    <div className={styles.container}>
      {/* <button onClick={scrollLeft} aria-label="Scroll left"> */}
      <button onClick={() => scroll("left")} aria-label="Scroll left">
        <ChevronLeftCircle size={25} className={styles.chevron_left}/>
      </button>

      <div ref={cardsRef} className={styles.cards}>
        {children}
      </div>

      {/* <button onClick={scrollRight} aria-label="Scroll right"> */}
      <button onClick={() => scroll("right")} aria-label="Scroll right">
        <ChevronRightCircle size={25} className={styles.chevron_right}/>
      </button>
    </div>
  );
};

