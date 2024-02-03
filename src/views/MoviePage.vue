<script setup lang="ts">
import MovieDetails from '../components/MovieDetails.vue';
import NavBar from '../components/NavBar.vue';
import MoviList from '../components/MovieList.vue';
import { toRefs, watch, onMounted } from 'vue';
import { useSearchStore } from '../stores/searchStore';

import LogoText from '../components/modules/LogoText.vue'; 

const prop = defineProps(["movie"]);
const emit = defineEmits(['close']);
let movie = prop.movie;

const searchStore = useSearchStore();

onMounted(() => {
    searchStore.setSearchQuery(movie.genres[0]);
    searchStore.setSearchBy('genre');
    window.scrollTo(0,0);
});

const handleClose = () => {
  emit('close');
}
</script>

<template>

    <MovieDetails 
      :movie="movie" 
      @close="handleClose"
    />

    <section class="nav-bar">
        <h2>Films by: {{ movie.genres[0] }}</h2>      
    </section>

    <MoviList />

    <footer>
        <LogoText />
    </footer>

</template>

<style lang="scss" scoped>
$primary-color: #F65261;
$secondary-color: #555555;

$secondary-color: #555555;

.nav-bar {
  display: flex;
  background-color: $secondary-color;
  padding: 1rem 0 1rem 3rem;
  color: white;

  &__body{
    display: flex;
    align-items: center;

    &--sort-label{
        margin-right: 1rem;
    }
  }

  p {
    font-weight: bold;
  }
}

footer {
    background-color: $secondary-color;
    padding: 1rem 0 1rem 0;
    text-align: center;
}
</style>