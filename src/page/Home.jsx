import React from 'react';
import "../assets/style.css";

import perfil from "../assets/img/NEM.jpg";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section id="principal">
      <div class="flex w-8/12 m-auto justify-end h-screen">
        <div className='h-screen m-auto  flex items-start justify-center flex-col min-w-max'>
          <h1>Hola, <span></span></h1>
          <h1>Bienvenido a<span></span></h1>
          <h1>NEM.<span></span></h1>
          <Link to='Servicios' className="w-1/2 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300"> Servicios </Link>
        </div>
        <div className='h-screen flex m-auto items-center justify-end min-w-max'>
          <img src={perfil} alt="Foto de perfil" className='rounded-full flex w-2/3' />
        </div>
      </div>
    </section>
  )
}
