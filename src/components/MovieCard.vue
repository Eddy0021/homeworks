<template>
    <div :class="$style['movie-card']">
      <div :class="$style['rating-cover']">
        <div :class="$style['rating-container']">
          <div :class="$style['rating-circle']">
            <span :class="$style['rating-number']">{{ movie.imdbRating }} / 10</span>
          </div>
        </div>
        <div :class="$style['rating-description']">{{ movie.storyline }}</div>
      </div>
      <img
        v-if="!imageError"
        v-lazyload="movie.posterurl"
        :alt="movie.title"
        @error="handleImageError"
      />
      <img v-else v-lazyload="noIMG" :alt="movie.title" />

      <div :class="$style['movie-info']">
        <div :class="$style['movie-title']">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.genres.join(', ') }}</p>
        </div>

        <div :class="$style['movie-release-date']">
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

<style module>
@import '../assets/stylesheets/components/MovieCard.scss';
</style>
