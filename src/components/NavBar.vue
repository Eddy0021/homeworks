<template>
  <section class="nav-bar">
    <p>{{ movies }} movie found</p>
    <div class="nav-bar__body">
      <span class="nav-bar__body--sort-label">SORT BY</span>
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
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Button from './modules/Button.vue';

import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();

const movies = ref(searchStore.getMoviesLength);
const sortBy = ref('releaseDate');

const setSortBy = (type: 'releaseDate' | 'rating') => {
  sortBy.value = type;
  searchStore.setSortBy(type);
};

watch(() => searchStore.getMoviesLength, (newLength) => {
    movies.value = newLength;
});

</script>

<style lang="scss" scoped>
$secondary-color: #555555;

.nav-bar {
  display: flex;
  justify-content: space-evenly;
  background-color: $secondary-color;
  padding: 1rem 0 1rem 0;
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
</style>
