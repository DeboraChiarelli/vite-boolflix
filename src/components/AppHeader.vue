<script>
// Importazione dello store
import { store } from "../store.js"
// Definizione il componente AppHeader
export default {
    // Nome del componente
    name: "AppHeader",
    // Dati del componente
    data() {
        return {
            store,
            isSearchActive: false,  // Aggiunta di uno stato per gestire la visualizzazione del campo di input
        }
    },
    // Eventi emessi dal componente
    emits: ["search"],
    methods: {
        // Funzione per attivare la barra di ricerca
        activateSearch() {
            this.isSearchActive = true;
        },
        // Funzione per eseguire la ricerca
        performSearch() {
            this.$emit("search");
            this.isSearchActive = false;  // in questo modo si nasconde il campo di input dopo la ricerca
        },
    },
}

</script>


<template>
    <header class="app-header">
        <div class="logo-menu">
            <div class="logo">
                <img src="../../public/logo netflix.png">
            </div>
            <!-- Menu di navigazione -->
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
        </div>
        <!-- Barra di ricerca e menu a destra -->
        <div class="search-bar">
            <!-- Se la ricerca è attiva, mostra il campo di input, altrimenti mostra l'icona della lente -->
            <div v-if="isSearchActive">
                <input type="text" placeholder="Inserisci il tuo titolo" v-model.trim="store.searchMovie">
                <button type="submit" @click="$emit('search')">Search</button>
            </div>
            <div v-else>
                <font-awesome-icon @click="activateSearch" :icon="['fas', 'search']" />
            </div>
            <!-- Menu a destra -->
            <div class="right-menu">
                <span>BAMBINI</span>
                <font-awesome-icon :icon="['fas', 'bell']" />
                <img class="user" src="../../public/utente.png">
                <font-awesome-icon :icon="['fas', 'caret-down']" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #141414;
    color: white;
}

.logo-menu {
    display: flex;
    align-items: center;
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

/* Stile per barra di ricerca e il menu a destra */
.search-bar {
    display: flex;
    align-items: center;
    justify-content: flex-end;

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

    .user {
        width: 20px;
    }
}

.right-menu {
    display: flex;
    gap: 15px;
    margin-left: 15px;
}
</style>