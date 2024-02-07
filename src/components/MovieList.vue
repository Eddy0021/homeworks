<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';
import { useSearch } from "../composables/useSearch";
import { toRefs, watch, onMounted } from 'vue';
import MovieCard from './MovieCard.vue';
import Button from '../components/modules/Button.vue'; 
import InputField from '../components/modules/InputField.vue'; 
import LogoText from '../components/modules/LogoText.vue'; 

const emit = defineEmits(['selectedMovie']);

const searchStore = useSearchStore();
const { movies, getMovies } = useSearch();

const { searchQuery, searchBy, sortBy } = toRefs(searchStore);

watch(() => searchStore.getSearchQuery, (newSearchQuery) => {
    searchQuery.value = newSearchQuery;
    search();
});

watch(() => searchStore.getSearchBy, (newSearchBy) => {
    searchBy.value = newSearchBy;
    search();
});

watch(() => searchStore.getSortBy, (newSortBy) => {
  sortBy.value = newSortBy;
  search();
});

const search = () => {   
  getMovies(searchQuery.value, searchBy.value, sortBy.value);
  searchStore.setMoviesLength(movies.value.length);
};
onMounted(() => {
    search();
});

const selectMovie = (movie: any) => {
  emit('selectedMovie', movie)
}
</script>

<template>

    <section class="main">

    <div class="container">
        <div v-if="movies.length > 0" class="movie-list">
            <MovieCard 
              v-for="movie in movies" :key="movie.id" 
              :movie="movie" 
              @click="selectMovie(movie)"/>
        </div>
        <div v-else class="movie-warning">
          <h1 >No films found</h1>
        </div>
    </div>

    </section>

</template>

<style lang="scss" scoped>
.main{
    background-color: #232323;
    padding-left: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .movie-list{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }

    .movie-warning{
        height: 546px;
        color: white;
        font-size: x-large;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>