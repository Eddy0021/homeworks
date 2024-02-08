<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';
import { useSearch } from "../composables/useSearch";
import { toRefs, watch, onMounted, watchEffect } from 'vue';
import MovieCard from './MovieCard.vue';
import Button from '../components/modules/Button.vue'; 
import InputField from '../components/modules/InputField.vue'; 
import LogoText from '../components/modules/LogoText.vue'; 

const emit = defineEmits(['selectedMovie']);

const searchStore = useSearchStore();
const { movies, getMovies } = useSearch();

const search = () => {   
  getMovies(searchStore.getSearchQuery, searchStore.getSearchBy, searchStore.getSortBy);
  searchStore.setMoviesLength(movies.value.length);
};

watchEffect(() => {
  search();
});

onMounted(() => {
    search();
});

const selectMovie = (movie: any) => {
  emit('selectedMovie', movie)
}
</script>

<template>

    <section :class="$style['main']">

    <div :class="$style['container']">
        <div v-if="movies.length > 0" :class="$style['movie-list']">
            <MovieCard 
              v-for="movie in movies" :key="movie.id" 
              :movie="movie" 
              @click="selectMovie(movie)"/>
        </div>
        <div v-else :class="$style['movie-warning']">
          <h1 >No films found</h1>
        </div>
    </div>

    </section>

</template>

<style module>
@import '../assets/stylesheets/components/MovieList.scss';
</style>