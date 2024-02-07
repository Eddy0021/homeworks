// src/stores/searchStore.ts
import { defineStore } from 'pinia';

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    searchQuery: '',
    searchBy: 'title' as 'title' | 'genre',
    sortBy: 'releaseDate' as 'releaseDate' | 'rating',
    moviesLength: 0,
  }),
  getters: {
    getSearchQuery() {
      return this.searchQuery;
    },
    getSearchBy() {
      return this.searchBy;
    },
    getSortBy() {
      return this.sortBy;
    },
    getMoviesLength() {    
      return this.moviesLength;
    },
  },
  actions: {
    setSearchQuery(query: string) {
      this.searchQuery = query;    
    },
    setSearchBy(property: 'title' | 'genre') {
      this.searchBy = property;    
    },
    setSortBy(criteria: 'releaseDate' | 'rating') {
      this.sortBy = criteria;
    },
    setMoviesLength(count: number) {
      this.moviesLength = count;
    },
  },
});
