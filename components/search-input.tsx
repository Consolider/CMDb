"use client";

import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import Skeleton from '@/components/skeleton';

const SearchInput = () => {
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
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      {loading && (
        <div>
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      )}

      <div className="results">
        {results.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => window.location.href = `/serie/${item.id}-${item.name.replace(/\s+/g, '-')}`}
          >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card {
          cursor: pointer;
          border: 1px solid #ccc;
          padding: 16px;
          margin: 8px;
          border-radius: 4px;
          transition: background-color 0.2s;
        }
        .card:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default SearchInput;
