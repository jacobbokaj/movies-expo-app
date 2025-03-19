export const TMDV_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY:process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}



export const fetchMovies = async({query}: { query: string}) => {
    const endpoint = query 
    ? `${TMDV_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
    : `${TMDV_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDV_CONFIG.headers,
    });

    if(!response.ok){
        throw new Error('Failed to fetch movies: ' + response.statusText);
    }

    const data = await response.json();

    return data.results;
}
/*const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));*/