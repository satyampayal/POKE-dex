import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function PokemonDetails() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    async function downloadPokemon() {

        const pokemonurl = "https://pokeapi.co/api/v2/pokemon/"


        const response = await axios.get(pokemonurl + id)
        const pokemon = response.data;
        setPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types,
            image: pokemon.sprites.other.dream_world.front_default
        });
    }
    useEffect(() => {
        downloadPokemon();
    })
    return (
        <>
            <h1 className="bg-pink-500 text-white font-[24px]  ">
                <Link to="/" className="ml-[60px] inline-block border-[1px] border-white rounded-[5px]
                 w-[80px] text-center px-[16px] py-[6px] bg-blue-400 m-2 hover:scale-[96%] hover:translate-y-[-2px]">BACK</Link>
            </h1>
            {pokemon && <div className="  italic grid grid-cols-2 w-[100%] h-[100vh] justify-center place-content-center bg-[rgba(0,0,0,0.7)] text-white">
                <div className="  justify-items-center max-w-[50%] ml-[200px] mt-[50px]" >
                    <h1 className="text-[24px]">Name:{pokemon.name}</h1>

                    <div className="text-blue-400 text-[20px] mt-[10px] m-4 w-20 border-2">
                        <p> Weight:{pokemon.weight}</p>
                        <p> Height:{pokemon.height}</p>
                    </div>

                    <div className="mt-[20px]"> <span className="text-pink-400 text-[20px]">Types:</span>
                        {pokemon.types.map(t => <span className="inline-block border-[1px] border-black rounded-[14px]   bg-pink-500 ml-[20px]  text-center px-[16px] py-[6px] w-[70px]" key={t.type.name}>{t.type.name}</span>)}</div>
                </div>
                <div>
                    <img src={pokemon.image} alt="" />
                </div>

            </div>}

        </>

    )
}
export default PokemonDetails;