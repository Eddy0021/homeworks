<script setup lang="ts">
import Banner from '../components/Banner.vue';
import NavBar from '../components/NavBar.vue';
import MoviList from '../components/MovieList.vue';

import LogoText from '../components/modules/LogoText.vue'; 
import { useSearchStore } from '../stores/searchStore';
import { onMounted } from 'vue';

const emit = defineEmits(['selectedMovie']);

const handleOpenDetails = (movie: any) => {
  emit('selectedMovie', movie)
}

const searchStore = useSearchStore();

onMounted(() =>{
    searchStore.setSearchQuery("");
    searchStore.setSearchBy('title');
    searchStore.setSortBy("releaseDate");
})
</script>

<template>

    <Banner />

    <NavBar />

    <MoviList @selectedMovie="handleOpenDetails" />

    <footer>
        <LogoText />
    </footer>

</template>

<style lang="scss" scoped>
@import '../assets/stylesheets/views/HomePage.scss';
</style>