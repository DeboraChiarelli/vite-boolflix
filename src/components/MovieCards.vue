<script>
// Definizione del componente Vue
export default {
    data() { // Dati del componente
        return {
            iconStar: [['far', 'star'], ['fas', 'star']], // Icona della stella, composta da due array di stringhe per gli stili regular e solid
        }
    },
    // Proprietà del componente (dati passati dal componente padre)
    props: {
        detailsMovie: Object,
    },
    // Proprietà calcolate del componente
    computed: {
        flagFunction() { // Funzione per restituire il percorso della bandiera in base alla lingua originale del film
            if (this.detailsMovie.original_language === 'it') {
                return 'italy.png';
            } else if (this.detailsMovie.original_language === 'de') {
                return 'germany.png';
            } else if (this.detailsMovie.original_language === 'en') {
                return 'uk.png';
            } else {
                return '';
            }


        },
        coverPath() { // Funzione per costruire il percorso dell'immagine di copertina del film
            if (this.detailsMovie.poster_path === null) {
                return '';
            }

            return `https://image.tmdb.org/t/p/w342/${this.detailsMovie.poster_path}`
        },
        starFunction() { // Funzione per calcolare il numero di stelle piene basate sul voto medio del film
            const vote = Math.ceil(this.detailsMovie.vote_average / 2)
            return vote;
        },
        voteStar() { // Funzione per costruire un array di classi FontAwesome per le stelle del voto
            const starArray = [];
            for (let i = 0; i < 5; i++) {
                if (i + 1 <= this.starFunction) {
                    starArray.push('fa-solid');
                } else {
                    starArray.push('fa-regular');
                }
            }
            return starArray;
        }

    }
}
</script>

<template>
    <div class="container-cards">
        <div class="cards">
            <!-- Immagine di copertina del film -->
            <img :src="coverPath">
            <!-- Dettagli del film -->
            <div class="details">
                <ul>
                    <li> {{ detailsMovie.title }}</li>
                    <li> {{ detailsMovie.original_title }}</li>
                    <li> {{ detailsMovie.original_language }}</li>
                    <li>
                        <img :src="flagFunction" class="flags">
                    </li>
                    <!-- Voto medio del film -->
                    <li> {{ starFunction }}</li>
                    <!-- Icone delle stelle basate sul voto medio -->
                    <li><font-awesome-icon class="stars" v-for="star in voteStar" :icon="`${star} fa-star`" /></li>
                </ul>
                <!-- Panoramica del film (mostrata al passaggio del mouse) -->
                <div class="overview">
                    <span v-if="detailsMovie.overview"><strong>Overview:</strong> {{ detailsMovie.overview }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-cards {
    display: flex;
    margin-bottom: 10px;
}

.stars {
    color: yellow;
}

.cards {
    position: relative;
    overflow: hidden;
    transition: transform 0.2s;
    cursor: pointer;
    margin-right: 10px;

    /* Effetto zoom al passaggio del mouse */
    &:hover {
        transform: scale(1.1);
    }

    /* Dettagli del film (inizialmente nascosti) */
    .details {
        position: absolute;
        top: 0%;
        left: 0%;
        // transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 10px;
        border-radius: 5px;
        color: white;
        width: 100%;
    }

    /* Mostra i dettagli al passaggio del mouse */
    &:hover .details {
        opacity: 1;
    }

    /* Panoramica del film (inizialmente nascosta) */
    .overview {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
        color: white;
        width: 100%;
    }

    /* Mostra la panoramica al passaggio del mouse */
    &:hover .overview {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>