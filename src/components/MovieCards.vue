<script>

export default {
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
            <li> {{ detailsMovie.vote_average }}</li>
        </ul>
        <div class="coverPath">
            <img :src="coverPath">
        </div>
    </div>
</template>

<style lang="scss"></style>