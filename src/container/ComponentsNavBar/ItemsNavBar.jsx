import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/index.css'


const ItemsNavBar = () => {
    return (
        <div key={Math.random} className="text-xl flex flex-col w-max lg:flex-grow text-start m-auto px-3">
            {[
                ['todos', '/Servicios'],
                ['front-end', '/category/FrontEnd'],
                ['scrum', '/category/Agile'],
                ['aws', '/category/AWS'],
                ['sketch', '/category/Wireframe'],
            ].map(([title, url]) => (
                <NavLink to={url} className={({ isActive }) => isActive ? 'block mt-4 lg:inline-block  text-gray-500 lg:mt-0 border-2 border-transparent border-b-gray-800 mr-4' : 'block mt-4 lg:inline-block text-gray-500 lg:mt-0 border-2 border-transparent hover:border-b-gray-800 mr-4'} >
                    {title}
                </NavLink>
            ))}
        </div>
    )
}

export default ItemsNavBar