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
                <img :src="flagFunction">
            </li>
            <li> {{ detailsMovie.vote_average }}</li>
        </ul>
    </div>
</template>

<style></style>