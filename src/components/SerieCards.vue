<script>

export default {
    data() {
        return {
            iconStar: [['far', 'star'], ['fas', 'star']],
        }
    },
    props: {
        detailsSerie: Object,
    },
    computed: {
        flagFunction() {
            if (this.detailsSerie.original_language === 'it') {
                return 'italy.png';
            } else if (this.detailsSerie.original_language === 'de') {
                return 'germany.png';
            } else if (this.detailsSerie.original_language === 'en') {
                return 'uk.png';
            } else {
                return '';
            }


        },
        coverPath() {
            if (this.detailsSerie.poster_path === null) {
                return '';
            }
            return `https://image.tmdb.org/t/p/w342/${this.detailsSerie.poster_path}`
        },
        starFunction() {
            const vote = Math.ceil(this.detailsSerie.vote_average / 2)
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
            <div class="details">
                <ul>
                    <li> {{ detailsSerie.name }}</li>
                    <li> {{ detailsSerie.original_name }}</li>
                    <li> {{ detailsSerie.original_language }}</li>
                    <li>
                        <img :src="flagFunction" class="flags">
                    </li>
                    <li> {{ starFunction }}</li>
                    <li><font-awesome-icon v-for="star in voteStar" :icon="`${star} fa-star`" /></li>
                </ul>
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