export interface MovieCredits {
  id: number;
  cast: [
    {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      cast_id: number;
      character: string;
      credit_id: string;
      order: number;
    }
  ]
  crew: [
    {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: null,
      credit_id: string;
      department: string;
      job: string;
    }
  ]
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: [
    {
      id: number;
      name: string
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieImages {
  "backdrops": [
    {
      "aspect_ratio": number,
      "height": number,
      "iso_639_1": null,
      "file_path": string,
      "vote_average": number,
      "vote_count": number,
      "width": number
    }  
  ],
  "id": number,
  "logos": [
    {
      "aspect_ratio": number,
      "height": number,
      "iso_639_1": string,
      "file_path": string,
      "vote_average": number,
      "vote_count": number,
      "width": number
    }
  ],
  "posters": [
    {
      "aspect_ratio": number,
      "height": number,
      "iso_639_1": string,
      "file_path": string,
      "vote_average": number,
      "vote_count": number,
      "width": number
    }
  ]
}

export interface MovieVideos {
  "id": number,
  "results": [
    {
      "iso_639_1": string,
      "iso_3166_1": string,
      "name": string,
      "key": string,
      "site": string,
      "size": number,
      "type": string,
      "official": boolean,
      "published_at": string,
      "id": string
    }
  ]
}

export interface People {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface PeopleMovieCredits {
  cast: [
    {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    character: string;
    credit_id: string;
    order: number;
    }
  ]
  crew: [
    {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    credit_id: string;
    department: string;
    job: string;
    }
  ]
  id: string;
}

export interface Popular {
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }
  ];
  total_pages: number;
  total_results: number;
}

export interface OMDb {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    }
  ],
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}