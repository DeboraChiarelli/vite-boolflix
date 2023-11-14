<script>
import MediaCard from "./MediaCard.vue";

export default {
    components: {
        MediaCard,
    },
    props: {
        detailsMovie: Object,
    },
};
</script>

<template>
    <MediaCard :mediaDetails="detailsMovie" />
</template>

<style></style>
  