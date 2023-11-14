<script>
/* Importo lo store e i componenti */
import { store } from '../store.js'
import MovieCards from './MovieCards.vue';
import SerieCards from './SerieCards.vue';


export default {
    name: "AppMain", /* definisco il componente AppMain */
    data() {
        return {
            store, /* creo un oggetto dati che mi restituisca lo store */
        };
    },
    components: { MovieCards, SerieCards } /* registro i componenti MovieCards e SerieCards */

}

</script>

<template>
    <!-- Corpo dell'applicazione -->

    <body id="app">
        <!-- Contenitore flessibile principale -->
        <div class="container">
            <!-- Prima riga con immagini statiche -->
            <div class="row">
                <!-- Col con immagini statiche -->
                <div class="col-2">
                    <img src="../../public/naruto.jpg" alt="#" />
                </div>
                <div class="col-2">
                    <img src="../../public/attackontitan.jpg" alt="#" />
                </div>
                <div class="col-2">
                    <img src="../../public/theoffice.jpeg" alt="#" />
                </div>
                <div class="col-2">
                    <img src="../../public/ilgrandegatsby.jpg" alt="#" />
                </div>
                <div class="col-2">
                    <img src="../../public/oppenheimer.jpg" alt="#" />
                </div>
            </div>
            <!-- Nuovo contenitore per le cards dinamiche -->
            <div class="container-cards">
                <!-- Nuova riga per le cards dinamiche -->
                <div class="row">
                    <!-- Colonne con MovieCards per ciascun film nel tuo store -->
                    <div class="col-4" v-for="movie in store.movies">
                        <MovieCards :detailsMovie="movie" />
                    </div>
                </div>
                <!-- Nuova riga per le cards dinamiche delle serie TV -->
                <div class="row">
                    <div class="col-4" v-for="serie in store.tvSeries">
                        <SerieCards :detailsSerie="serie" />
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<style lang="scss" scoped>
/* Layout flessibile a colonna per il contenitore principale */
.container {
    display: flex;
    flex-direction: column;
}

/* Layout flessibile a riga con wrap e centratura */
.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

// .img {
//     width: 80px;
// }
/* Definizione della larghezza delle colonne con classe col-2 */
.col-2 {
    flex-basis: calc((100% / 12) * 2);
}

// .img {
//     width: 100%;
//     height: auto;
// }
</style>