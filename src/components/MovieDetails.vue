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
    <header :class="$style['banner']">
        <img src="@/assets/background.png" alt="" :class="$style['banner__background']" />

        <div :class="$style['container']">
            <div :class="$style['logo-placeholder']">
                <LogoText />
                <span @click="this.$router.push('/')" :class="$style['banner-search']"><img src="../assets/search.svg" alt="search"></span>
            </div>

            <section :class="$style['movie-section']">
              <div name="movie" :class="$style['movie']">
                  <img
                      v-if="!imageError"
                      v-lazyload="movie.posterurl"
                      :alt="movie.title"
                      :key="movie.id"
                      @error="handleImageError"
                    />
                    <img 
                        v-else v-lazyload="noIMG" 
                        :alt="movie.title" 
                        :key="movie.id" 
                    />
                  <div :class="$style['movie-details']">
                      <div name="movie-title" :class="$style['movie-title']">
                          <h1>{{ movie.title }}</h1>
                          <p :class="$style['movie-rating']">{{ movie.imdbRating }}</p>
                      </div>
                      <p name="movie-genres" :class="$style['movie-genres']">{{ movie.genres.join(' ,') }}</p>
                      <div name="movie-info" :class="$style['movie-info']">
                          <p>{{ movie.year }}</p>
                          <p>{{ movie.duration.split("PT")[1] }}</p>
                      </div>
                      <p :class="$style['movie-description']">{{ movie.storyline }}</p>
                  </div>
              </div>
            </section>
        </div>
    </header>
</template>

<style module>
@import '../assets/stylesheets/components/MovieDetails.scss';
</style>