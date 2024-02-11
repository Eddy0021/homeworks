<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';
import { useSearch } from "../composables/useSearch";
import { toRefs, watch, onMounted, watchEffect, ref } from 'vue';
import MovieCard from './MovieCard.vue';
import Button from '../components/modules/Button.vue'; 
import InputField from '../components/modules/InputField.vue'; 
import LogoText from '../components/modules/LogoText.vue'; 
import { useRoute  } from 'vue-router';

const searchStore = useSearchStore();
const { movies, getMovies } = useSearch();
const route = useRoute();

const query = ref('');

if(route){
  query.value = route.query.search != null ? route.query.search : "";
}

const search = () => {   
  getMovies(searchStore.getSearchQuery || query.value, searchStore.getSearchBy, searchStore.getSortBy);
  searchStore.setMoviesLength(movies.value.length);
};

watchEffect(() => {
  search();
});

onMounted(() => {
    search();
});

</script>

<template>

    <section :class="$style['main']">

    <div :class="$style['container']">
        <div v-if="movies.length > 0" :class="$style['movie-list']">
            <MovieCard 
              v-for="movie in movies" :key="movie.id" 
              :movie="movie" 
              @click="$router.push({ name: 'movie', params: { id: movie.id } })"/>
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