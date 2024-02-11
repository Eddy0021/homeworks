<script setup lang="ts">
import Banner from '../components/Banner.vue';
import NavBar from '../components/NavBar.vue';
import MoviList from '../components/MovieList.vue';

import LogoText from '../components/modules/LogoText.vue'; 
import { useSearchStore } from '../stores/searchStore';
import { onMounted, watch } from 'vue';

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

    <MoviList />

    <footer>
        <LogoText />
    </footer>

</template>

<style module>
@import '../assets/stylesheets/views/HomePage.scss';
</style>