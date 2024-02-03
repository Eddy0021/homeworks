<template>
  <header class="banner">
    <img src="@/assets/background.png" alt="" class="banner__background" />
    <div class="container">
      <div class="logo-placeholder">
        <LogoText />
      </div>

      <div class="search">
        <div class="search__title">
          <h2>FIND YOUR MOVIE</h2>
        </div>
        <div class="search__field">
          <InputField
            v-model="searchQuery"
            @keydown.enter="search"
            placeholder="Search"
            class="search-field__input"
          />
          <Button @click="search" title="SEARCH" type="primary" />
        </div>
        <div class="search-by">
          <span>SEARCH BY</span>
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
</template>

<script setup lang="ts">
import { ref, type Ref,computed, watchEffect } from 'vue';
import LogoText from './modules/LogoText.vue';
import InputField from './modules/InputField.vue';
import Button from './modules/Button.vue';

import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();

const searchQuery = ref('');
const searchBy = ref('title');

const search = () => {
  searchStore.setSearchQuery(searchQuery.value);
};

const setSearchBy = (type: 'title' | 'genre') => {
  searchBy.value = type;
  searchStore.setSearchBy(type);
};
</script>

<style lang="scss">
.banner {
  width: 100%;
  height: 17rem;
  color: white;

  &__background {
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

      &__title {
        margin-bottom: 1rem;
      }

      &__field{
        display: flex;
        margin-bottom: 1rem;
      }

      &-field__input {
        display: flex;
        margin-right: 1rem;
      }

      &-by {
        span {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
