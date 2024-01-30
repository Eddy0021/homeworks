<script setup lang="ts">
import { defineComponent } from 'vue';
import { ref, type Ref,computed, watchEffect } from 'vue';
import { useSearch } from "../composables/useSearch";
import Button from '../components/modules/Button.vue'; 
import InputField from '../components/modules/InputField.vue'; 
import LogoText from '../components/modules/LogoText.vue'; 

const { movies, getMovies } = useSearch();

const searchQuery: Ref<string> = ref("");
let searchBy: 'title' | 'genre' = 'title';
let sortBy: 'releaseDate' | 'rating' = 'releaseDate';

const setSearchBy = (property: 'title' | 'genre') => {
  searchBy = property;
  search();
};

const setSortBy = (criteria: 'releaseDate' | 'rating' | undefined) => {
  sortBy = criteria!;
  search();
};

const search = () => {   
  getMovies(searchQuery.value, searchBy, sortBy);
};
search();
</script>

<template>

    <header>
        <img src="../assets/background.png" alt="">
        <div class="container">
            <div class="logo-placeholder">
                <LogoText />   
            </div>
            
            <div class="search">
                <div class="title">
                    <h2>FIND YOUR MOVIE</h2>
                </div>
                <div class="search-field">
                    <InputField
                         v-model="searchQuery" 
                         @keydown.enter="search"
                         placeholder="Search" 
                         class="margin-left-1"
                    />
                    <Button 
                        @click="search" 
                        title="SEARCH" 
                        type="primary" 
                    />
                </div>
                <div class="search-by">
                    <span class="margin-left-1">SEARCH BY</span>
                    <Button
                        @click="setSearchBy('title')"
                        title="TITLE"
                        :type="searchBy === 'title' ? 'primary' : 'secondary'"
                    />
                    <Button
                        @click="setSearchBy('genre')"
                        title="GENRE"
                       :type="searchBy === 'genre' ? 'primary' : 'secondary'"
                    />
                </div>
            </div>
        </div>
    </header>

    <section class="nav-bar">
      <p>{{ movies.length }} movie found</p>
      <div class="body-sort">
        <span class="margin-left-1">SORT BY</span>
        <Button 
            @click="setSortBy('releaseDate')" 
            title="RELEASE DATE" 
            :type="sortBy === 'releaseDate' ? 'primary' : 'secondary'" 
        />
        <Button 
            @click="setSortBy('rating')" 
            title="RATING" 
            :type="sortBy === 'rating' ? 'primary' : 'secondary'" 
        />
      </div>
    </section>

    <section class="main">
        <div v-if="movies.length > 0" class="container" >
            <div class="movie-card" v-for="movie in movies" :key="movie.id">
                <div class="hover-cover">
                    <div class="rating-container">
                        <div class="rating-circle">
                        <span class="rating-number">{{ movie.rating }} / 5</span>                      
                        </div>
                    </div>
                    <div class="rating-description">{{ movie.description }}</div>
                </div>
                <img v-lazyload="movie.imagePath" :alt="movie.title" />

                <div class="movie-info">
                    <div class="movie-title">
                        <h3>{{ movie.title }}</h3>
                        <p>{{ movie.genre }}</p>
                    </div>

                    <div class="movie-release-date">
                        {{ movie.releaseDate }}
                    </div>
                </div>
            </div>             
        </div>
        <div v-else class="warning-info">
            <h2>No movies found</h2>
        </div>   
    </section>

    <footer>
        <LogoText />
    </footer>

</template>

<style lang="scss" scoped>
$primary-color: #F65261;
$secondary-color: #555555;

$movie-card-width: 300px;
$movie-card-height: 450px;

header {
    width: 100%;
    height: 17rem;
    color: white;

    img {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        filter: brightness(0.2);
    }

    .container {
        .logo-placeholder {
            padding: 2rem;
        }

        .search {
            display: flex;
            align-items: center;
            flex-flow: column;

            div {
                width: 50%;
            }

            .search-field {
                display: flex;
                margin-bottom: 1rem;
            }
        }
    }
}

.nav-bar {
    display: flex;
    justify-content: space-evenly;
    background-color: $secondary-color;
    padding: 1rem 0 1rem 0;
    color: white;

    .body-sort {
        display: flex;
        align-items: center;
    }

    p {
        font-weight: bold;
    }
}

.main {
    background-color: #232323;
    padding-left: 1.5rem;

    .warning-info {
        height: 546px;
        color: white;
        font-size: x-large;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        display: flex;
        flex-wrap: wrap;

        .movie-card {
            margin: 2rem;

            &:hover {
                cursor: pointer;
                .movie-info {
                    color: $primary-color;
                }

                .hover-cover {
                    background-color: #232323e8;
                    position: absolute;
                    height: $movie-card-height;
                    width: $movie-card-width;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-flow: column;
                    text-align: center;
                    border: 1px solid;
                    border-image: linear-gradient(to right, $primary-color, green, $primary-color);
                    border-image-slice: 1;

                    .rating-container {
                        position: relative;
                        width: 150px;
                        height: 150px;
                    }

                    .rating-circle {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 100%;
                        height: 100%;
                        border: 2px solid white;
                        border-radius: 50%;
                        background-color: transparent;
                    }

                    .rating-number {
                        display: block;
                        text-align: center;
                        line-height: 150px;
                        font-size: 24px;
                        font-weight: bold;
                        color: #8eff8e;
                    }

                    .rating-description {
                        color: white;
                        overflow: hidden;
                        margin: 10px;
                        transition: max-height 0.3s ease;
                    }
                }
            }
        }

        .movie-card img {
            width: $movie-card-width;
            height: $movie-card-height;
            object-fit: cover;
        }

        .movie-info {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: start;
            color: #FFFFFF;
        }

        .movie-title h3 {
            margin-bottom: 10px;
            font-weight: bold;
        }

        .movie-release-date {
            border: 1px solid $secondary-color;
            padding: 2px 10px;
            border-radius: 3px;
        }
    }
}

footer {
    background-color: $secondary-color;
    padding: 1rem 0 1rem 0;
    text-align: center;
}

.margin-left-1 {
    margin-right: 1rem;
}

.hover-cover {
    display: none;
}
</style>