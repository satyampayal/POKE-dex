import React, { Component } from 'react'
import Search from '../Search/Search'
import PokedexList from '../PokemonList/PokedexList'

export class Pokedex extends Component {
  render() {
    return (
      <div>
        <Search/>
        <PokedexList/>
      </div>
    )
  }
}

export default Pokedex