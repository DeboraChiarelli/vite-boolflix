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
  methods: {
    fetchMovies() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=76429bebfcd531f4853c24263d028640&query=${this.store.searchMovie}`)

        .then(res => {
          // console.log(res.data.results)
          this.store.movies = res.data.results;
          console.log(this.store.movies)
        })
    },
  },
  created() {
    this.fetchMovies;
  }
}

</script>

<template>
  <AppHeader @search="fetchMovies" />
  <AppMain />
  <MovieCards />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
// @use './styles/partials/variables' as *;
</style>
