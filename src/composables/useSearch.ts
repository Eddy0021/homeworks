import { ref } from 'vue';
import type { Ref } from 'vue';
//import moviesList from '../assets/data/movies.json'
import Api from '@/api/api'

interface Search {
  movies: Ref<any[]>;
  getMovies: (searchText: string, searchBy: 'title' | 'genre', sortBy: 'releaseDate' | 'rating') => void;
}

const response = await Api.fetchAllMovies();

export function useSearch(): Search  {
  const movies = ref<any[]>([...response]);

  async function getMovies(searchText: string, searchBy: "title" | "genre", sortBy: 'releaseDate' | 'rating') {
    try {
      let filteredMovies: any[] = [];

    
      // Search movie in list
      if (searchText === '') {
        filteredMovies = [...response];
      } else {
        filteredMovies = (searchBy === 'title')
          ? response.filter((movie: any) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
          : response.filter((movie: any) => movie.genres.some((genre: any) => genre.toLowerCase().includes(searchText.toLowerCase())));
      }
      
      // List sort
      if (sortBy === 'releaseDate') {
        filteredMovies.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
      } else if (sortBy === 'rating') {
        filteredMovies.sort((a, b) => b.imdbRating - a.imdbRating);
      }
    
      movies.value = [...filteredMovies];
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }  

  return { movies, getMovies };
}