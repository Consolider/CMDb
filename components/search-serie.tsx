"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/search.module.css"
import { SearchSerieResults, SeriePopular } from "@/lib/interfaces";

// interface DataItem {
//     // type: string;
//     // name: string;
//     // vote_average: string;
//     // first_air_date: string;
//     // poster_path: string;
//     // director: string;
//     // url: string;

//     adult: boolean;
//     backdrop_path: string;
//     genre_ids: number[];
//     id: number;
//     origin_country: string[];
//     original_language: string;
//     original_name: string;
//     overview: string;
//     popularity: number;
//     poster_path: string;
//     first_air_date: string;
//     name: string;
//     vote_average: number;
//     vote_count: number;
// }

interface SearchComponentProps {
    // data: DataItem[];
    // data: SeriePopular[];
    results: SearchSerieResults[];
}

// const SearchSerie: React.FC<SearchComponentProps> = ({ data }) => {
// export default function SearchSerie({ data }: SearchComponentProps) {
    // const [filteredData, setFilteredData] = useState<DataItem[]>(data);
// export default function SearchSerie({ results }: SeriePopular) {
export default function SearchSerie(data: SeriePopular) {
// export default function SearchSerie({ results }: SearchComponentProps) {
    const [filteredData, setFilteredData] = useState<SeriePopular>(data);
    // const [filteredData, setFilteredData] = useState<SearchSerieResults[]>(results);
    // const [filteredData, setFilteredData] = useState<SeriePopular>(results);
// export default function SearchSerie({data}: SearchComponentProps) {
    // const [filteredData, setFilteredData] = useState<SearchSerieResults[]>(data);
    const [searchInput, setSearchInput] = useState<string>('');

    useEffect(() => {
        const filterData = () => {
            if (!searchInput) {
                setFilteredData(data);
                return;
            }
            const filter = searchInput.toUpperCase();
            const newFilteredData = data.results.filter(item => {
                // const textValue = `${item.name}, ${item.first_air_date}`;
                const textValue = `${item.name}`;
                // const textValue = `${item}`;
                return textValue.toUpperCase().includes(filter);
            });
            setFilteredData(newFilteredData);
        };

        filterData();
    }, [searchInput, data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };
    
    const isSearchVisible = searchInput.length > 0 && filteredData.results.length > 0;
    // const isSearchVisible = searchInput !== "";

    
    // console.log(filteredData)
    return (
        <div className={styles.search_user}>
            <input
                type="text"
                id="search_input"
                value={searchInput}
                // onChange={(e) => setSearchInput(e.target.value)}
                onChange={handleChange}
                placeholder="Search..."
            />
            <Image
                // className={styles.search_user}
                src="/user.jpg"
                alt="User Image"
                width={23}
                height={23}
            />
            {/* <div className={styles.cards}> */}
            <div className={styles.search}
                style={{ visibility: isSearchVisible ? 'visible' : 'hidden', opacity: isSearchVisible ? 1 : 0 }}>
                {/* style={{ visibility: isSearchVisible ? 'visible' : 'visible', opacity: isSearchVisible ? 1 : 1 }}> */}
                {filteredData.results.length > 0 &&
                    filteredData.results.map((element, index) => (
                        <Link
                            key={index}
                            className={styles.card}
                            href={`/serie/${element.id}-${element.name}`
                        }>
                            {element.poster_path && element.name ? (
                            <Image
                                src={element.poster_path}
                                alt={element.name}
                                width={500}
                                height={1500}
                            />
                            ) : (
                            <Image
                                src="/movie.jpg"
                                alt="movie poster"
                                width={100}
                                height={100}
                            />
                            )}
                            <div className={styles.cont}>
                                <h3>{element.name}</h3>
                                <p>
                                    {element.first_air_date}
                                    <span>IMDb</span>
                                    <i className="bi bi-star-fill" /> {element.vote_average}
                                </p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

// export default SearchSerie;
