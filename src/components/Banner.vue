<script setup lang="ts">
import { ref, type Ref,computed, watchEffect } from 'vue';
import LogoText from './modules/LogoText.vue';
import InputField from './modules/InputField.vue';
import Button from './modules/Button.vue';

import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();

const searchQuery = ref("");
const searchBy = ref('title');

const search = () => {
  searchStore.setSearchQuery(searchQuery.value);
};

const setSearchBy = (type: 'title' | 'genre') => {
  searchBy.value = type;
  searchStore.setSearchBy(type);
};
</script>

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

<style scoped>
@import '../assets/stylesheets/components/Banner.scss';
</style>
