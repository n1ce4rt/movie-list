import axios from 'axios';



const instance = axios.create(
  { 
    baseURL: 'https://yts.mx/api/v2/',
    
  },
);
export type movieType = {
    background_image: string,
    background_image_original: string,
    date_uploaded: string,
    date_uploaded_unix: number,
    description_full: string,
    genres: string[],
    id: number,
    imdb_code: string,
    language: string,
    large_cover_image: string,
    medium_cover_image: string,
    mpa_rating: string,
    rating: number,
    runtime: number,
    slug: string,
    small_cover_image: string,
    state: string,
    summary: string,
    synopsis: string,
    title: string,
    title_english: string,
    title_long: string,
    torrents: any,
    url: string,
    year: number,
    yt_trailer_code: string,
}

export type dataType = {
    limit: number,
    movie_count: number,
    page_number: number,
    movies: movieType[]
}
export type responsType = {
    '@meta': any,
    data: dataType,
    status: string,
    status_message: string
}

export type responseFilmTypy = {
  '@meta': any,
    data: {
      movie: movieType
    },
    status: string,
    status_message: string
}
export const filmsAPI = {

  getFilms(page: number) {
    return instance.get<responsType>(`list_movies.json?limit=8&page=${page}`).then((response) => {
      return response.data.data;
    });
  },
  getFilm(id: number) {
    return instance.get<responseFilmTypy>(`movie_details.json?movie_id=${id}`).then((response) => {
      return response.data.data.movie;
      
    });
  },
  deleteDemon(demonId: string) {
    return instance.delete(`demons/${demonId}`);
  },
  changeDemon(demonId: string, age: string, birthday: string, growth: string, weight: string, status: string ) {
    return instance.patch(`demons/${demonId}`, {'age' : `${age}`, 'date of birth' : `${birthday}`, 'growth' : `${growth}`, 'weight' : `${weight}`, 'status': `${status}`});
  },
};
