<script>
export default {
    props: {
        mediaDetails: Object, // Dettagli del media passati come oggetto
    },
    computed: {
        flagFunction() {
            if (this.mediaDetails.original_language === 'it') {
                return 'italy.png';
            } else if (this.mediaDetails.original_language === 'de') {
                return 'germany.png';
            } else if (this.mediaDetails.original_language === 'en') {
                return 'uk.png';
            } else {
                return '';
            }
        },
        coverPath() {
            if (this.mediaDetails.poster_path === null) {
                return '';
            }
            return `https://image.tmdb.org/t/p/w342/${this.mediaDetails.poster_path}`;
        },
        starFunction() {
            const vote = Math.ceil(this.mediaDetails.vote_average / 2);
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
        },
    },
};
</script>

<template>
    <div class="container-cards">
        <div class="cards">
            <img :src="coverPath">
            <div class="details">
                <ul>
                    <li>{{ mediaDetails.title || mediaDetails.name }}</li>
                    <li>{{ mediaDetails.original_title || mediaDetails.original_name }}</li>
                    <li>{{ mediaDetails.original_language }}</li>
                    <li><img :src="flagFunction" class="flags"></li>
                    <li>{{ starFunction }}</li>
                    <li>
                        <font-awesome-icon class="stars" v-for="star in voteStar" :icon="`${star} fa-star`" />
                    </li>
                </ul>
                <div class="overview">
                    <span v-if="mediaDetails.overview"><strong>Overview:</strong> {{ mediaDetails.overview }}</span>
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
