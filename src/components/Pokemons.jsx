import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getNextPokemonsAction, getBeforePokemonsAction, getPokemon } from '../redux/pokemonDuck'
import Pokemon from './Pokemon'

const Pokemons = () => {

    const dispatch = useDispatch()
    const pokemons = useSelector(store => store.pokemons.data)

    return (
        <div className="row" style={{padding:"30px"}}>
            <div className="col-md-6" >
                <h2 className="d-flex justify-content-center">Pokemon List</h2>
                <hr />
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary" onClick={() => dispatch(getBeforePokemonsAction(15)) }>Before Pokemons</button>
                    <button className="btn btn-secondary" onClick={() => dispatch(getNextPokemonsAction(15)) }>Next Pokemons</button>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="list-group" style={{width:"80%", marginTop:"20px"}} >
                        {   
                            pokemons.map( (pokemon) => (
                                <button key={pokemon.url} onClick={() => dispatch(getPokemon(pokemon.url)) } type="button" className="list-group-item list-group-item-action">{pokemon.name}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-6" >
                <h2 className="d-flex justify-content-center">Pokemon Detail</h2>
                <div className="d-flex justify-content-center align-content-center">
                    <Pokemon />
                </div>
            </div>
        </div>
        
    )
}

export default Pokemons
