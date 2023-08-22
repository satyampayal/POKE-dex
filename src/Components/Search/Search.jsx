
import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div className='w-[100%] bg-[rgba(0,0,0,0.7)] font-white flex  justify-around items-center'>
          <h1 className='text-[24px] tracking-[3px] px-[16px] py-[10px]'>PokeDex</h1>
          <form action="#">
            <input className='border-b-[3px] border-none  px-[16px] py-[6px] ' placeholder='Enter Pokemon Name' type="text" name="" id="" />
          </form>
      </div>
    )
  }
}

export default Search