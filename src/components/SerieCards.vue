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
    <div class="card serie">
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
</template>



<style lang="scss" scoped>
.serie {
    border: 1px solid coral;
}
</style>