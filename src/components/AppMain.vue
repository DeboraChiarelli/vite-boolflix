<script>
import { store } from '../store.js'
import MovieCards from './MovieCards.vue';
import SerieCards from './SerieCards.vue';


export default {
    name: "AppMain",
    data() {
        return {
            store,
        };
    },
    components: { MovieCards, SerieCards }

}

</script>

<template>
    <body id="app">
        <div class="container">
            <div class="row">
                <div class="col-4" v-for="movie in store.movies">
                    <MovieCards :detailsMovie="movie" />
                </div>
            </div>

            <div class="row">
                <div class="col-4" v-for="serie in store.tvSeries">
                    <SerieCards :detailsSerie="serie" />
                </div>

            </div>
        </div>
    </body>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>