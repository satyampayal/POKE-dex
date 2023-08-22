import {Link} from 'react-router-dom'
import React from 'react';

function Pokemon({ name, url, id }) {
    return (
        <Link to={`pokemon/${id}`} style={{ background: 'linear-gradient(90deg, rgba(255, 0, 82, 1) 0%, rgba(0, 188, 212, 1) 50%, rgba(238, 130, 238, 1) 100%)' }}
            className='    border-[1px] border-black rounded-[5px] hover:rounded-none  hover:scale-[101%]   cursor-pointer'>
            <div className=' place-items-center'>
                <h3 className='text-center pb-[20px] text-[120%]'>{name}</h3>
                <div className='max-w-[400px] max-h[400px] pt-5 flex justify-center ' >
                    <img src={url} />
                </div>
            </div>
        </Link>
    )
}



export default Pokemon;