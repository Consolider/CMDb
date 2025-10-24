"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "@/components/search.module.css"
import { extractYear, roundToNearest, toURL } from "@/lib/utils";
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import Skeleton from '@/components/skeleton-search';

// const test_array = [
//   {
//   page: 1,
//   results: [
//     {
//       adult: false,
//       backdrop_path: '/yUOFocKDW7MCC5isx4FK8A68QFp.jpg',
//       genre_ids: [
//         1,
//         2
//       ],
//       id: 4607,
//       origin_country: [
//         "us",
//         "se"
//       ],
//       original_language: 'en',
//       original_name: 'Lost',
//       overview: 'Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.',
//       popularity: 55.5663,
//       poster_path: 'https://image.tmdb.org/t/p/w185/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
//       first_air_date: '2004-09-22',
//       name: 'Lost',
//       vote_average: 7.9,
//       vote_count: 4711
//     },
//     {
//       adult: false,
//       backdrop_path: '/yUOFocKDW7MCC5isx4FK8A68QFp.jpg',
//       genre_ids: [
//         1,
//         2
//       ],
//       id: 66732,
//       origin_country: [
//         "us",
//         "se"
//       ],
//       original_language: 'en',
//       original_name: 'Stranger Things',
//       overview: 'Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.',
//       popularity: 55.5663,
//       poster_path: 'https://image.tmdb.org/t/p/w185/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
//       first_air_date: '2016-09-22',
//       name: 'Stranger Things',
//       vote_average: 8.7,
//       vote_count: 4711
//     }
//   ],
//   total_pages: 24,
//   total_results: 467
//   }
// ]

// const data = {test_array}

export default function SearchSerie() {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 900);
  const [results, setResults] = useState<any[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  // const isSearchVisible = searchInput.length > 0 && filteredData.results.length > 0;
  const loading = true

  useEffect(() => {
    if (debouncedQuery) {
      const fetchData = async () => {
        // setLoading(true);
        try {
          const response = await fetch(`/api/search?query=${debouncedQuery}`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setResults(data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          // setLoading(false);
        }
      };

      fetchData();
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  return (
    <div className={styles.search_user}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <Image
        src="/user.jpg"
        alt="User Image"
        width={100}
        height={100}
      />

      {loading && (
        <div>
          {[...Array(1)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      )}

      <div className={styles.search}>
        {results.map((item) => (
          // <div
          //   key={item.id}
          //   className="card"
          //   onClick={() => window.location.href = `/serie/${item.id}-${item.name.replace(/\s+/g, '-')}`}
          // >
          //   <h3>{item.name}</h3>
          //   <p>{item.description}</p>
          // </div>
          <Link
            key={item.id}
            className={styles.card}
            href={`/serie/${item.id}-${toURL(item.original_name)}`}
          >
            <Image
              // src={`${item.poster_path}`}
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={`${item.name} poster`}
              width={100}
              height={100}
            />
            <div className={styles.cont}>
              <h3>{item.name}</h3>
              <div className={styles.sub}>
                <p>{extractYear(item.first_air_date)}</p>
                <span>IMDb</span><i><Star size={10} fill='yellow'/></i>
                <p>{roundToNearest(item.vote_average, 1)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
