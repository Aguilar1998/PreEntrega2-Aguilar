import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/index.css'


// Components Navigation(ItemsNavbar) this is tailwind
const ItemsNavBar = () => {

    return (
        <div className="text-xl lg:flex-grow slide-in-top text-center">
            {[
                ['Todos', '/Servicios'],
                ['Front-End', '/category/FrontEnd'],
                ['AWS', '/category/AWS'],
                ['Sketch', '/category/Wireframe'],
            ].map(([title, url]) => (
                <NavLink to={url} className={({ isActive }) => isActive ? 'block mt-4 lg:inline-block  text-gray-800 lg:mt-0 border-2 border-transparent border-b-gray-800 mr-4' : 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent hover:border-b-gray-800 mr-4'} >
                    {title}
                </NavLink>
            ))}
        </div>

    )
}

export default ItemsNavBar