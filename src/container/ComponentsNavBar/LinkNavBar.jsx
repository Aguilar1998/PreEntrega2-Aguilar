import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/index.css'


// Components Navigation(LinkNavBar) this is tailwind
const LinkNavBar = () => {

    return (
        <div className="text-xl lg:flex-grow slide-in-top">
            {[
                [2,'Servicios', '/'],
                [3,'Formulario', '/FormComentario'],
            ].map(([key,title, url]) => (
                <NavLink key={key} to={url} className={({ isActive }) => isActive ? 'block mt-4 lg:inline-block  text-gray-800 lg:mt-0 border-2 border-transparent border-b-gray-800 mr-4' : 'block mt-4 lg:inline-block text-gray-800 lg:mt-0 border-2 border-transparent hover:border-b-gray-800 mr-4'} >
                    {title}
                </NavLink>
            ))}
        </div>

    )
}

export default LinkNavBar