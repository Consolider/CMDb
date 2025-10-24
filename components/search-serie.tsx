"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "@/components/search.module.css"
import { extractYear, roundToNearest, toURL } from "@/lib/utils";
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import SkeletonSearch from "@/components/skeleton-search"

export default function SearchSerie() {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 900);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (debouncedQuery) {
      const fetchData = async () => {
        setLoading(true);
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
          setLoading(false);
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
            <SkeletonSearch key={index} />
          ))}
        </div>
      )}

      <div className={styles.search}>
        {results.map((item) => (
          <Link
            key={item.id}
            className={styles.card}
            href={`/serie/${item.id}-${toURL(item.original_name)}`}
          >
            <Image
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
