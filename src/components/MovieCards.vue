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
    <div class="cards">
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
        <div class="coverPath">
            <img :src="coverPath">
        </div>
    </div>
</template>

<style lang="scss"></style>