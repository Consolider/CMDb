"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "@/components/search.module.css"
import { extractYear, toURL } from "@/lib/utils";
import { Star } from 'lucide-react';
import { useState } from "react";

const test_array = [
  {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/yUOFocKDW7MCC5isx4FK8A68QFp.jpg',
      genre_ids: [
        1,
        2
      ],
      id: 4607,
      origin_country: [
        "us",
        "se"
      ],
      original_language: 'en',
      original_name: 'Lost',
      overview: 'Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.',
      popularity: 55.5663,
      poster_path: 'https://image.tmdb.org/t/p/w185/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
      first_air_date: '2004-09-22',
      name: 'Lost',
      vote_average: 7.9,
      vote_count: 4711
    },
    {
      adult: false,
      backdrop_path: '/yUOFocKDW7MCC5isx4FK8A68QFp.jpg',
      genre_ids: [
        1,
        2
      ],
      id: 66732,
      origin_country: [
        "us",
        "se"
      ],
      original_language: 'en',
      original_name: 'Stranger Things',
      overview: 'Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.',
      popularity: 55.5663,
      poster_path: 'https://image.tmdb.org/t/p/w185/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
      first_air_date: '2016-09-22',
      name: 'Stranger Things',
      vote_average: 8.7,
      vote_count: 4711
    }
  ],
  total_pages: 24,
  total_results: 467
  }
]

const data = {test_array}

export default function SearchSerie() {
    // const [filteredData, setFilteredData] = useState<SeriePopular>(data);
    const [searchInput, setSearchInput] = useState<string>('');

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchInput(e.target.value);
    // };

    // const isSearchVisible = searchInput.length > 0 && filteredData.results.length > 0;
    const isSearchVisible = searchInput.length > 0;

    return (
        <div className={styles.search_user}>
            <input
                type="text"
                id="search_input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                // onChange={handleChange}
                placeholder="Search..."
            />
            <Image
                src="/user.jpg"
                alt="User Image"
                width={23}
                height={23}
            />
            <div className={styles.search}
                style={{ visibility: isSearchVisible ? 'visible' : 'hidden', opacity: isSearchVisible ? 1 : 0 }}>
                {/* style={{ visibility: isSearchVisible ? 'visible' : 'visible', opacity: isSearchVisible ? 1 : 1 }}> */}
                {/* {filteredData.results.length > 0 && */}
                {test_array.map((element) => (
                    element.results.map((result, index) => (
                        <Link
                            key={index}
                            className={styles.card}
                            // href={`/serie/${result.id}-${result.original_name.replace(/\s+/g, '-').toLowerCase()}`}
                            href={`/serie/${result.id}-${toURL(result.original_name)}`}
                        >
                            <Image
                                src="/movie.jpg"
                                alt="movie poster"
                                width={100}
                                height={100}
                            />
                            <div className={styles.cont}>
                                <h3>{result.name}</h3>
                                <div className={styles.sub}>
                                    <p>{extractYear(result.first_air_date)}</p>
                                    <span>IMDb</span><i><Star size={10} fill='yellow'/></i>
                                    <p>{result.vote_average}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                ))}
            </div>
        </div>
    );
};
