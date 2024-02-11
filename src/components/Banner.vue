<script setup lang="ts">
import { ref, type Ref,computed, watchEffect, onMounted  } from 'vue';
import LogoText from './modules/LogoText.vue';
import InputField from './modules/InputField.vue';
import Button from './modules/Button.vue';

import { useSearchStore } from '../stores/searchStore';
import { useRoute, useRouter  } from 'vue-router';

const searchStore = useSearchStore();
const route = useRoute();
const router = useRouter();

const query = ref('');

if(route){
  query.value = route.query.search != null ? route.query.search : '';
}

const searchQuery = ref('');
const searchBy = ref('title');

const search = () => {
  if(route){
    router.push({ query: { ...route.query, search: searchQuery.value } });
  }
  
  searchStore.setSearchQuery(searchQuery.value);
};

const setSearchBy = (type: 'title' | 'genre') => {
  searchBy.value = type;
  searchStore.setSearchBy(type);
};

watchEffect(() => {
  searchQuery.value = query.value || '';
});

onMounted(() => {
  searchQuery.value = query.value || '';
});
</script>

<template>
  <header :class="$style['banner']">
    <img src="@/assets/background.png" alt="" :class="$style['banner__background']" />
    <div :class="$style['container']">
      <div :class="$style['logo-placeholder']">
        <LogoText />
      </div>

      <div :class="$style['search']">
        <div :class="$style['search__title']">
          <h2>FIND YOUR MOVIE</h2>
        </div>
        <div name="search-field" :class="$style['search__field']">
          <InputField
            v-model="searchQuery"
            @keydown.enter="search"
            placeholder="Search"
            :class="$style['search-field__input']"
          />
          <Button @click="search" title="SEARCH" type="primary" />
        </div>
        <div name="search-by" :class="$style['search-by']">
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

<style module>
@import '../assets/stylesheets/components/Banner.scss';
</style>
