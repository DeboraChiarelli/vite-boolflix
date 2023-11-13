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
}

.cards {
    position: relative;
    overflow: hidden;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

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

    &:hover .details {
        opacity: 1;
    }

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

    &:hover .overview {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>