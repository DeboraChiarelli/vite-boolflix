<script>

export default {
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
            <li> {{ detailsSerie.vote_average }}</li>
        </ul>
    </div>
</template>



<style lang="scss" scoped>
.serie {
    border: 1px solid coral;
}
</style>