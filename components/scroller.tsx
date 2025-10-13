"use client"

import styles from "./scroller.module.css"
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { useRef } from 'react';
import CardMedia from './card-media';
import CardMediaDev from "./card-media-dev";

const Scroller: React.FC = () => {
  const leftBtnRef = useRef<HTMLButtonElement | null>(null);
  const rightBtnRef = useRef<HTMLButtonElement | null>(null);
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
    // <div style={{ display: 'flex', alignItems: 'center', border: '1px solid red' }}>
    <div className={styles.container}>
    {/* <div> */}
      <button onClick={scrollLeft} aria-label="Scroll left">
        {/* <ChevronLeftCircle size={25} className={styles.bi_chevron_left} /> */}
        <ChevronLeftCircle size={25} className={styles.bi_chevron_left}/>
      </button>

      {/* <div ref={cardsRef} className="cards" style={{ overflowX: 'auto', display: 'flex' }}> */}
      <div ref={cardsRef} className={styles.cards}>

        <div className={styles.card}>Card 1</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 2</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 3</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 4</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 5</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 6</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 7</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 8</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 9</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 10</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 11</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 12</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 13</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 14</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 15</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 16</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 17</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 18</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 19</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 20</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 21</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 22</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 23</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 24</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 25</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 26</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 27</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 28</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 29</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 30</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 31</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 32</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 33</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#ccc', marginRight: '10px', borderRadius: '8px' }}>Card 34</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#aaa', marginRight: '10px', borderRadius: '8px' }}>Card 35</div>
        <div style={{ minWidth: '130px', height: '195px', color: '#000', background: '#888', marginRight: '10px', borderRadius: '8px' }}>Card 36</div>
        
            {/* <CardMedia /> */}
            {/* <CardMediaDev key={index} data={data} /> */}
            {/* <CardMediaDev /> */}
      </div>

      <button onClick={scrollRight} aria-label="Scroll right">
        <ChevronRightCircle size={25} className={styles.bi_chevron_right}/>
      </button>
    </div>
  );
};

export default Scroller; // Make sure this line is present.
