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
$primary-color: #F65261;
$secondary-color: #555555;

footer {
    background-color: $secondary-color;
    padding: 1rem 0 1rem 0;
    text-align: center;
}
</style>