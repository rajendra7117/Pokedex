import { createSlice } from "@reduxjs/toolkit";

const pokemonInfoSlice = createSlice({
    name: 'pokemon',
    initialState: {pokemonData: localStorage.getItem('pokemonData') ? JSON.parse(localStorage.getItem('pokemonData')) : []},
    reducers : {
        ShowPokemonInfo(state, action){
            state.pokemonData = action.payload
            localStorage.setItem('pokemonData', JSON.stringify(state.pokemonData))
            
        }
    }
})

export const pokemonInfoActions = pokemonInfoSlice.actions

export default pokemonInfoSlice;