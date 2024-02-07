<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue'
import HomePage from './views/HomePage.vue'
import MoviePage from './views/MoviePage.vue'

const showDetails = ref(false);
const movie = ref([]);

const handleSelectedMovie: (item: any) => void = (item) => {
  showDetails.value = true;
  movie.value = item;
};

const handleCloseDetails = () => {
    showDetails.value = false;
    movie.value = [];
}
</script>

<template>
  <HomePage 
    v-if="showDetails == false"
    @selectedMovie="handleSelectedMovie"
  />
  <MoviePage 
    v-else
    :movie="movie"
    @close="handleCloseDetails"
  />
  <!-- <RouterView /> -->
</template>

<style scoped>
@import 'assets/stylesheets/App.scss';
</style>
