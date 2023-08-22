import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Pokedex from './Components/Pokedex/Pokedex'
import PokemonDetails from './Components/PokemonDetails/PokemonDetails'

export class App extends Component {
  render() {
    return (

      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />

      </Routes>

    )
  }
}

export default App