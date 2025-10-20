import { MovieCredits, MovieDetails, MoviePopular, People, PeopleCombinedCredits, PeopleMovieCredits, PeoplePopular, SearchSerieResults, SerieDetails, SeriePopular } from "../interfaces";

const tmdbApiKey = process.env.TMDB_API_KEY


export async function fetchMovieCredits(movie_id: number): Promise<MovieCredits | null> {
const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const credit: MovieCredits = await response.json();
    return credit;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchMovieDetails(movie_id: number): Promise<MovieDetails | null> {
const url = `https://api.themoviedb.org/3/movie/${movie_id}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const movie: MovieDetails = await response.json();
    return movie;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchMoviePopular(page_nr: number): Promise<MoviePopular | null> {
const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page_nr}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const result: MoviePopular = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchPeople(person_id: number): Promise<People | null> {
  const url = `https://api.themoviedb.org/3/person/${person_id}`;
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const result: People = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchPeoplePopular(): Promise<PeoplePopular | null> {
  const url = `https://api.themoviedb.org/3/person/popular`;
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const result: PeoplePopular = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchPeopleCombinedCredits(person_id: number): Promise<PeopleCombinedCredits | null> {
  const url = `https://api.themoviedb.org/3/person/${person_id}/combined_credits`;
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const result: PeopleCombinedCredits = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchPeopleMovieCredits(person_id: number): Promise<PeopleMovieCredits | null> {
  const url = `https://api.themoviedb.org/3/person/${person_id}/movie_credits`;
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const result: PeopleMovieCredits = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchPeopleSerieCredits(person_id: number): Promise<PeopleMovieCredits | null> {
  const url = `https://api.themoviedb.org/3/person/${person_id}/tv_credits`;
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const result: PeopleMovieCredits = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

// export async function fetchSearchSerie(query: string) {
// export async function fetchSearchSerie(query: string): Promise<SearchSerieResults | null> {
// export async function fetchSearchSerie(): Promise<SeriePopular | null> {
export async function fetchSearchSerie(query: string): Promise<SeriePopular | null> {
const url = `https://api.themoviedb.org/3/search/tv?query=${query}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const result: SeriePopular = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchSerieCredits(serie_id: number): Promise<MovieCredits | null> {
const url = `https://api.themoviedb.org/3/tv/${serie_id}/credits`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const credit: MovieCredits = await response.json();
    return credit;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchSerieDetails(serie_id: number): Promise<SerieDetails | null> {
const url = `https://api.themoviedb.org/3/tv/${serie_id}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const movie: SerieDetails = await response.json();
    return movie;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchSeriePopular(page_nr: number): Promise<SeriePopular | null> {
const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page_nr}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  },
};

  try {
    const response = await fetch(url, options);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.error('Fetch error:', response.statusText);
      return null;
    }

    const result: SeriePopular = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}
