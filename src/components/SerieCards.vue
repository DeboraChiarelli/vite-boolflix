
  
<script>
import MediaCard from "./MediaCard.vue";

export default {
    components: {
        MediaCard,
    },
    props: {
        detailsSerie: Object,
    },
};
</script>

<template>
    <MediaCard :mediaDetails="detailsSerie" />
</template>

<style></style>
  