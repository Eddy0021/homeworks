<script setup lang="ts">
import LogoText from '../components/modules/LogoText.vue'; 
import MovieDetails from '../components/MovieDetails.vue';
import NavBar from '../components/NavBar.vue';
import MoviList from '../components/MovieList.vue';
import { ref, toRefs, watch, onMounted } from 'vue';
import { useSearchStore } from '../stores/searchStore';
import { useRoute } from 'vue-router';
import Api from '../api/api';

const route = useRoute();
const searchStore = useSearchStore();

const movie = ref(null);

const fetchData = async () => {
    try {
        movie.value = await Api.fetchGetMovieByID(route.params.id);
        searchStore.setSearchQuery(movie.value.genres[0]);
        searchStore.setSearchBy('genre');
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error fetching movie:', error);
        // Optionally handle the error, e.g., display an error message
    }
};

onMounted(fetchData);

watch(() => route.params.id, (newId, oldId) => {
    if (newId !== oldId) {
        fetchData();
    }
});

</script>

<template>

    <div v-if="movie">
      <MovieDetails :movie="movie" />

      <section :class="$style['nav-bar']">
        <h2>Films by: {{ movie.genres[0] }}</h2>
      </section>

      <MoviList />

      <footer>
        <LogoText />
      </footer>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

</template>

<style module>
@import '../assets/stylesheets/views/MoviePage.scss';
</style>