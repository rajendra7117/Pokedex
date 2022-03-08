import { configureStore } from "@reduxjs/toolkit";
import pokemonInfoSlice from "./PokemonInfoSlice";


const store = configureStore({
    reducer:{
        pokemonInfoSlice: pokemonInfoSlice.reducer
    }
})

export default store;