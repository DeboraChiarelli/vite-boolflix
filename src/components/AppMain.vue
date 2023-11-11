<script>
import { store } from '../store.js'
import MovieCards from './MovieCards.vue';


export default {
    name: "AppMain",
    data() {
        return {
            store,
        };
    },
    components: { MovieCards }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="movie in store.movies">
                <MovieCards :detailsMovie="movie" />
            </div>

        </div>
    </div>
</template>

<style lang="scss"></style>