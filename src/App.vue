<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import MovieCards from './components/MovieCards.vue';

import axios from 'axios';
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    //AppMain,
    MovieCards,
    AppMain
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    const request = axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '76429bebfcd531f4853c24263d028640',
        query: 'The Office'
      }
    });

    request.then((response) => {
      const responseJson = response.data;
      const movies = responseJson.results;
      console.log(movies);
    })
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
  <MovieCards />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
