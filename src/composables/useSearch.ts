import { ref } from 'vue';
import type { Ref } from 'vue';
import moviesList from '../assets/data/movies.json'

interface Search {
  movies: Ref<any[]>;
  getMovies: (searchText: string, searchBy: 'title' | 'genre', sortBy: 'releaseDate' | 'rating') => void;
}

export function useSearch(): Search  {
  const movies = ref<any[]>([...moviesList]);

  function getMovies(searchText: string, searchBy: "title" | "genre", sortBy: 'releaseDate' | 'rating') {
    let filteredMovies: any[] = [];

    
    // Search movie in list
    if (searchText === '') {
      filteredMovies = [...moviesList];
    } else {
      filteredMovies = (searchBy === 'title')
        ? moviesList.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
        : moviesList.filter((movie) => movie.genres.some(genre => genre.toLowerCase().includes(searchText.toLowerCase())));
    }
    
    // List sort
    if (sortBy === 'releaseDate') {
      filteredMovies.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
    } else if (sortBy === 'rating') {
      filteredMovies.sort((a, b) => b.imdbRating - a.imdbRating);
    }
  
    movies.value = [...filteredMovies];
  }  

  return { movies, getMovies };
}