<script>
// Importazione del componente AppHeader, AppMain, axios e lo store
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';
import { store } from "./store.js";
// Definizione del componente principale dell'applicazione
export default {
  components: {
    AppHeader, // Registrazione dei componenti AppHeader e AppMain
    //AppMain,
    AppMain
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // Funzione per ottenere i film e le serie TV dall'API
    fetchMovies() {
      // Richiesta GET per i film
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=76429bebfcd531f4853c24263d028640&query=${this.store.searchMovie}`)

        .then(res => {
          // console.log(res.data.results)
          // Aggiornamento dello store con i risultati dei film
          this.store.movies = res.data.results;
          console.log(this.store.movies)
        })
      // Richiesta GET per le serie TV
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=76429bebfcd531f4853c24263d028640&query=${this.store.searchMovie}`)
        .then(res => {
          // Aggiorna lo store con i risultati delle serie TV
          this.store.tvSeries = res.data.results;
          console.log(this.store.tvSeries)
        })
    },
  },
  // Funzione hook di ciclo di vita di Vue (creato alla creazione dell'istanza)
  created() {
    // Chiamata della funzione fetchMovies per ottenere i dati all'avvio dell'app
    this.fetchMovies;
  }
}

</script>

<template>
  <!-- Utilizzo dei componenti AppHeader e AppMain -->
  <AppHeader @search="fetchMovies" />
  <AppMain />
</template>

<style lang="scss">
// Importazione le regole CSS dal file general.scss
@use './styles/general.scss' as *;
// @use './styles/partials/variables' as *;
</style>
