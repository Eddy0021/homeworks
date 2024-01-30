// useSearch.ts
import { ref } from 'vue';
import type { Ref } from 'vue';
import { moviesList } from './moviesData';
import type { Movies } from './moviesData';

interface Search {
    movies: Ref<Movies[]>;
    getMovies: (searchText: string, searchBy: 'title' | 'genre', sortBy: 'releaseDate' | 'rating') => void;
  }

export function useSearch(): Search  {
  const movies: Ref<Movies[]> = ref([...moviesList]);

  function getMovies(searchText: string, searchBy: "title" | "genre", sortBy: 'releaseDate' | 'rating') {
    let filteredMovies: Movies[] = [];

    
    // Search movie in list
    if (searchText === '') {
      filteredMovies = [...moviesList];
    } else {
      filteredMovies = (searchBy === 'title')
        ? moviesList.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
        : moviesList.filter((movie) => movie.genre.toLowerCase().includes(searchText.toLowerCase()));
    }
    
    // List sort
    if (sortBy === 'releaseDate') {
      filteredMovies.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
    } else if (sortBy === 'rating') {
      filteredMovies.sort((a, b) => b.rating - a.rating);
    }
  
    movies.value = [...filteredMovies];
  }  

  return { movies, getMovies };
}
