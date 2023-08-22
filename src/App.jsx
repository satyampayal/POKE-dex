import React, { Component } from 'react'
import Pokedex from './Components/Pokedex/Pokedex'
import Search from './Components/Search/Search'
import PokedexList from './Components/PokemonList/PokedexList'
export class App extends Component {
  render() {
    return (
      <div>
            <Search/>
            <PokedexList/> 
      </div>
    )
  }
}

export default App