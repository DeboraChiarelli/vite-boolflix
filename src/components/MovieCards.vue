<script>

export default {
    data() {
        return {
            iconStar: [['far', 'star'], ['fas', 'star']],
        }
    },
    props: {
        detailsMovie: Object,
    },
    computed: {
        flagFunction() {
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
        coverPath() {
            if (this.detailsMovie.poster_path === null) {
                return '';
            }

            return `https://image.tmdb.org/t/p/w342/${this.detailsMovie.poster_path}`
        },
        starFunction() {
            const vote = Math.ceil(this.detailsMovie.vote_average / 2)
            return vote;
        },
        voteStar() {
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
            <img :src="coverPath">
            <div class="details">
                <ul>
                    <li> {{ detailsMovie.title }}</li>
                    <li> {{ detailsMovie.original_title }}</li>
                    <li> {{ detailsMovie.original_language }}</li>
                    <li>
                        <img :src="flagFunction" class="flags">
                    </li>
                    <li> {{ starFunction }}</li>
                    <li><font-awesome-icon v-for="star in voteStar" :icon="`${star} fa-star`" /></li>
                </ul>
            </div>
            <div class="overview">
                <span v-if="detailsMovie.overview"><strong>Overview:</strong> {{ detailsMovie.overview }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-cards {
    display: flex;
    // Altri stili per il contenitore delle cards
}

.cards {
    position: relative;
    transition: transform 0.2s; // Aggiungi una transizione per un effetto più fluido
    cursor: pointer;

    &:first-child:hover {
        transform: scale(1.1); // Esempio: ingrandisci il primo elemento al passaggio del mouse
    }
}

.details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s; // Aggiungi una transizione per un effetto più fluido
}

.cards:first-child:hover .details {
    opacity: 1; // Rendi visibile il dettaglio al passaggio del mouse sul primo elemento
}
</style>