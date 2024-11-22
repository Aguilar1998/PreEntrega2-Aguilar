import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/index.css';
import ItemsNavBar from './ItemsNavBar';

const LinkNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="text-xl lg:flex-grow">
      {[
        [2, 'servicios', '/Servicios'],
        [3, 'formulario', '/FormComentario'],
      ].map(([key, title, url]) => (
        title === 'servicios' ? (
          <div
            key={key}
            className="relative inline-block text-left"
            ref={dropdownRef}
          >
            <NavLink
              to={url}
              className={`block mt-4 lg:inline-block text-gray-500 lg:mt-0 border-2 border-transparent 'hover:border-b-gray-500 mr-4`}
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.preventDefault(); // Prevenir redirección si el menú se despliega
                setIsOpen(!isOpen);
              }}
            >
              {title}
            </NavLink>
            {isOpen && (
              <div
                className="absolute z-10 mt-2 w-max bg-yellow-200 border-white rounded-md shadow-lg"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1 flex flex-col" role="none">
                  <ItemsNavBar />
                </div>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            key={key}
            to={url}
            className={({ isActive }) =>
              `block mt-4 lg:inline-block text-gray-500 lg:mt-0 border-2 border-transparent ${
                isActive ? 'border-b-gray-800' : 'hover:border-b-gray-800'
              } mr-4`
            }
          >
            {title}
          </NavLink>
        )
      ))}
    </div>
  );
};

export default LinkNavBar;
