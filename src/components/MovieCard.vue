<template>
    <div class="movie-card">
      <div class="rating-cover">
        <div class="rating-container">
          <div class="rating-circle">
            <span class="rating-number">{{ movie.imdbRating }} / 10</span>
          </div>
        </div>
        <div class="rating-description">{{ movie.storyline }}</div>
      </div>
      <img
        v-if="!imageError"
        v-lazyload="movie.posterurl"
        :alt="movie.title"
        @error="handleImageError"
      />
      <img v-else v-lazyload="noIMG" :alt="movie.title" />

      <div class="movie-info">
        <div class="movie-title">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.genres.join(', ') }}</p>
        </div>

        <div class="movie-release-date">
          {{ movie.year }}
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import noIMG from '../assets/noIMG.jpg';

const props = defineProps(["movie"]);
const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};
</script>

<style scoped>
@import '../assets/stylesheets/components/MovieCard.scss';
</style>
