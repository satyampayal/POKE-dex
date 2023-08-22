import React, { Component } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon';

function PokedexList() {
    const DEFAULT_URL="https://pokeapi.co/api/v2/pokemon";
    const [pokedex_url,setPokedex_url] = useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl,setNextUrl]=useState(DEFAULT_URL);
    const [prevUrl,setPrevUrl]=useState(DEFAULT_URL);
    // console.log(url)
    async function downloadPokemons() {
        const response = await axios.get(pokedex_url ? pokedex_url : DEFAULT_URL);

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        const pokemonResults = response.data.results;

        const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        const pokemonListData = await axios.all(pokemonPromise);

        const pokemonFinalList = pokemonListData.map(pokemonData => {
            const pokemon = pokemonData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        });
      //console.log(pokemonFinalList);
        setPokemonList(pokemonFinalList);
    }
    useEffect(() => {
        downloadPokemons();

    }, [pokedex_url])

    return (
        <div className='w[100%] h-[100%]'>
                <h1 className='text-[24px] text-center m-3'>Pokemon List</h1>
                <div className='mt-[20px] mb-[30px] w-[100%] h-3 flex gap-2 justify-center items-center'>
                <button onClick={()=>setPokedex_url(prevUrl)} className='border-[1px] w-[60px] px-[16px] py-[6px] border-none bg-blue-500 text-white cursor-pointer hover:scale-[102%] '>prev</button>
                <button onClick={()=>setPokedex_url(nextUrl)} className='border-[1px] w-[60px] px-[16px] py-[6px] border-none bg-green-500 text-white cursor-pointer hover:scale-[102%]'>Next</button>
            </div>
            <div className='px-[20px] grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-3'>
                {pokemonList.map(pokemon=> <Pokemon name={pokemon.name} key={pokemon.id} id={pokemon.id} url={pokemon.image} type={pokemon.types}/>)}
            </div>
            <div className='mt-[20px] mb-[30px] w-[100%] h-3 flex gap-2 justify-center items-center'>
                <button onClick={()=>setPokedex_url(prevUrl)} className='border-[1px] w-[60px] px-[16px] py-[6px] border-none bg-blue-500 text-white cursor-pointer hover:scale-[102%] '>prev</button>
                <button onClick={()=>setPokedex_url(nextUrl)} className='border-[1px] w-[60px] px-[16px] py-[6px] border-none bg-green-500 text-white cursor-pointer hover:scale-[102%]'>Next</button>
            </div>

            
        </div>
    )
}

export default PokedexList