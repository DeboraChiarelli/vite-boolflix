<script>
import { store } from "./../store.js"

export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    }
}

</script>


<template>
    <form>

        <input type="text" placeholder="film" v-model.trim="store.searchMovie">
        <button type="submit" @click.prevent="$emit('search')">Search</button>

    </form>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>