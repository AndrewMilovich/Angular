import {environment} from '../../environments/environment';

const {API} = environment;

export const urls = {
  movies: `${API}/discover/movie?api_key=9d15905010c06db187e7f83aec2cef70&page=`,
  image: 'https://image.tmdb.org/t/p/w300',
  genres: `${API}/genre/movie/list?api_key=9d15905010c06db187e7f83aec2cef70`,
}
