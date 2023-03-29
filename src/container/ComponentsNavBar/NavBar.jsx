import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../../assets/index.css'
import { CartContext } from '../../Context/CartContext'
import LinkNavBar from './LinkNavBar'


// Components Navbar, this is tailwind.
// https://bluuweb.github.io/tailwindcss/05-components/#navigation-navbar
const NavBar = () => {
    const [toggleOrders, setToggleOrders] = useState(false)
    const { cart } = useContext(CartContext)
    return (
        <nav className="flex  bg-yellow-300 flex-col items-center">
            <div className='flex flex-center max-w-6xl w-full h-20 items-center justify-between flex-wrap   '>
                <NavLink to='/' className={({ isActive }) => isActive ? 'slide-in-bck-left border-2 border-transparent mr-4' : ' mt-4 lg:inline-block lg:mt-0 border-2 border-transparent mr-4'} >

                    <div className="flex items-center flex-shrink-0 text-blue-500 mr-6">
                        <span className="font-semibold text-xl tracking-tight focus-in-expand-fwd">N.E.M</span>
                    </div>

                </NavLink>
                <LinkNavBar />
                <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
                    <div className="text-sm flex-grow  text-end m-5">

                    </div>
                    <div onClick={() => setToggleOrders(!toggleOrders)}>
                        <Link to='/CartContainer' className="flex text-sm px-4 py-2 leading-none text-blue-500  lg:mt-0">
                            <div>{cart.length > 0 ? cart.length : null}</div>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar