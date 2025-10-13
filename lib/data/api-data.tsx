import { MovieCredits, MovieDetails, MovieImages, MovieVideos, Popular } from "../interfaces";

const omdbApiKey = process.env.OMDB_API_KEY
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

export function fetchMovieImages(movie_id: MovieImages) {
const url = 'https://api.themoviedb.org/3/movie/movie_id/images';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
}

export function fetchMovieVideos(movie_id: MovieVideos) {
const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
}

export async function fetchPopular(page_nr: number): Promise<Popular | null> {
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

    const result: Popular = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    return null;
  }
}

export async function fetchPopularNOTnull(page_nr: number) {
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
    //   return null;
    }

    const result: Popular = await response.json();
    return result;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    // return null;
  }
}


export async function fetchOMDb(title: string){
  try {
    const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${omdbApiKey}`);

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
