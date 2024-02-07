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

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 40rem;
  color: white;

  &__background {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: brightness(0.2);
  }

  .logo-placeholder{
    display: flex;
    justify-content: space-between;
  }

  &-search{
    img{
      width: 2rem;
      transform: rotate(88deg);
      cursor: pointer;
    }
  }

  .container {
    .logo-placeholder {
      padding: 2rem;
    }

    .movie-section{
      display: flex;
      justify-content: center;
      .movie {
          display: flex;
          gap: 40px;
          margin-top: 30px;
          width: 70%;

        img{
            width: 20rem;
            height: 30rem;
        }

          
        &-details {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &-title {
            color: #FFFFFF;
            font-size: 2.2rem;
            display: flex;
            align-items: center;
            gap: 30px;
        }

        &-rating {
            border: 1px solid #FFFFFF;
            padding: 15px;
            border-radius: 50%;
            color: #A1E66F;
        }

        &-genres {
            color: #FFFFFF;
            margin-top: 10px;
            font-size: 1.1rem;
        }

        &-info {
            color: #F65261;
            display: flex;
            font-size: 1.6rem;
            gap: 20px;
            margin: 30px 0px;
        }

        &-description {
            color: #FFFFFF;
            font-size: 1.1rem;
        }
      }
    }
  }
}
</style>