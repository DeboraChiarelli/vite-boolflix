<script>

export default {
    props: {
        detailsMovie: Object,
    }
}
</script>

<template>
    <div class="cards">
        <ul>
            <li> {{ detailsMovie.title }}</li>
            <li> {{ detailsMovie.original_title }}</li>
            <li> {{ detailsMovie.original_language }}</li>
            <li> {{ detailsMovie.vote_average }}</li>
        </ul>
    </div>
</template>

<style></style>