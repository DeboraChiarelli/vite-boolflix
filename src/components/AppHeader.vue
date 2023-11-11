<script>
import { store } from "../store.js"

export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    },
    emits: ["search"],
}

</script>


<template>
    <div>

        <input type="text" placeholder="film" v-model.trim="store.searchMovie">
        <button type="submit" @click="$emit('search')">Search</button>

    </div>
</template>

<style lang="scss">
// @use './styles/general.scss' as *;
// @use './styles/partials/variables' as *;
</style>