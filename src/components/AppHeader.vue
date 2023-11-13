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
    <header class="app-header">
        <div class="logo">
            <img src="../../public/logo netflix.png">
        </div>
        <nav class="nav-menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Serie TV</a></li>
                <li><a href="#">Film</a></li>
                <li><a href="#">Originali</a></li>
                <li><a href="#">Aggiunti di recente</a></li>
                <li><a href="#">La mia lista</a></li>
            </ul>
        </nav>
        <div class="search-bar">
            <!-- <input type="text" placeholder="film" v-model.trim="store.searchMovie">
                                                <button type="submit" @click="$emit('search')">Search</button> -->
            <font-awesome-icon @click="$emit('search')" :icon="['fas', 'magnifying-glass']" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #111;
    color: white;
}

.logo {
    width: 150px;
    font-weight: bold;
}

.nav-menu {
    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    li {
        margin-right: 20px;
    }


}

.search-bar {
    display: flex;
    align-items: center;

    input {
        padding: 8px;
        margin-right: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 8px 16px;
        background-color: red;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
}
</style>