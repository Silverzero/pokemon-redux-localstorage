import React from 'react'
import {useSelector} from 'react-redux'

const Pokemon = () => {
        
    const pokemon = useSelector(store => store.pokemons.index)
    
    return pokemon ? (
        <div className="card">
            <div className="card-body">
                <img src={pokemon.sprites.front_default} alt="" />
                <div className="card-title">{pokemon.id} - {pokemon.name}</div>
                <p className="card-text">Height: {pokemon.height} | Weight: {pokemon.weight}</p>
            </div>
        </div>
    ) : <></>
}

export default Pokemon
