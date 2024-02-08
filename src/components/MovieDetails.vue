<script setup lang="ts">
import { ref } from 'vue';
import noIMG from '../assets/noIMG.jpg';
import LogoText from './modules/LogoText.vue'
const props = defineProps(["movie"]);

const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};
</script>

<template>
    <header class="banner">
        <img src="@/assets/background.png" alt="" class="banner__background" />

        <div class="container">
            <div class="logo-placeholder">
                <LogoText />
                <span @click="$emit('close')" class="banner-search"><img src="../assets/search.svg" alt="search"></span>
            </div>

            <section class="movie-section">
              <div class="movie">
                  <img
                      v-if="!imageError"
                      v-lazyload="movie.posterurl"
                      :alt="movie.title"
                      @error="handleImageError"
                    />
                    <img v-else v-lazyload="noIMG" :alt="movie.title" />
                  <div class="movie-details">
                      <div class="movie-title">
                          <h1>{{ movie.title }}</h1>
                          <p class="movie-rating">{{ movie.imdbRating }}</p>
                      </div>
                      <p class="movie-genres">{{ movie.genres.join(' ,') }}</p>
                      <div class="movie-info">
                          <p>{{ movie.year }}</p>
                          <p>{{ movie.duration.split("PT")[1] }}</p>
                      </div>
                      <p class="movie-description">{{ movie.storyline }}</p>
                  </div>
              </div>
            </section>
        </div>
    </header>
</template>

<style scoped>
@import '../assets/stylesheets/components/MovieDetails.scss';
</style>