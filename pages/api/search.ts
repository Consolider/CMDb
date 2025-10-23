import { NextApiRequest, NextApiResponse } from 'next';

const tmdbApiKey = process.env.TMDB_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  const url = `https://api.themoviedb.org/3/search/tv?query=${query}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${tmdbApiKey}`,
    },
  };

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch data' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
