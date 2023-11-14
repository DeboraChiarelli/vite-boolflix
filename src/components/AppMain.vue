<script>
/* Importo lo store e i componenti */
import { store } from '../store.js'
// import MovieCards from './MovieCards.vue';
// import SerieCards from './SerieCards.vue';
import MediaCard from './MediaCard.vue';

export default {
    name: "AppMain", /* definisco il componente AppMain */
    data() {
        return {
            store, /* creo un oggetto dati che mi restituisca lo store */
        };
    },
    components: { MediaCard } /* Registro il componente MediaCard */
    // components: { MovieCards, SerieCards } /* registro i componenti MovieCards e SerieCards */

}

</script>

<template>
    <!-- Corpo dell'applicazione -->

    <body id="app">
        <!-- Contenitore flessibile principale -->
        <div class="container-fluid">
            <!-- Prima riga con immagini statiche -->
            <div class="row">
                <!-- Col con immagini statiche -->
                <div class="col-2">
                    <img src="../../public/naruto.jpg" alt="#" class="static-image" />
                </div>
                <div class="col-2">
                    <img src="../../public/attackontitan.jpg" alt="#" class="static-image" />
                </div>
                <div class="col-2">
                    <img src="../../public/theoffice.jpeg" alt="#" class="static-image" />
                </div>
                <div class="col-2">
                    <img src="../../public/ilgrandegatsby.jpg" alt="#" class="static-image" />
                </div>
                <div class="col-2">
                    <img src="../../public/unanottedaleoni.jpg" alt="#" class="static-image" />
                </div>
                <div class="col-2">
                    <img src="../../public/oppenheimer.jpg" alt="#" class="static-image" />
                </div>
            </div>
        </div>
        <!-- Nuovo contenitore per le cards dinamiche -->
        <div class="container-cards">
            <!-- Nuova riga per le cards dinamiche -->
            <div class="row">
                <div class="col-2" v-for="media in store.movies" :key="media.id">
                    <MediaCard :mediaDetails="media" />
                </div>

                <div class="col-2" v-for="media in store.tvSeries" :key="media.id">
                    <MediaCard :mediaDetails="media" />
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

.static-image {
    width: 253px;
    height: 380px;
    object-fit: cover;
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