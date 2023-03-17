import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import { CartContext } from '../../Context/CartContext'
import { Cart } from './Cart'

export const CartContainer = () => {
    const { cart, loading, getTotalPrice, clearCart } = useContext(CartContext)

    console.log(cart);
    return (
        <div className='flex flex-col justify-between h-screen'>
            <div className='flex flex-col justify-start'>
                <h3 className=' m-auto text-3xl'>Total: ${getTotalPrice()}</h3>

                <button className='m-auto border-2 pl-3 pr-3 border-gray-300 hover:text-white hover:bg-gray-800 hover:border-transparent  rounded-xl' onClick={() => clearCart()} >
                    Vaciar Carrito
                </button>
            </div>
            <div>
                {
                    loading
                        ?
                        <div className='flex flex-col h-3/6 justify-center'>
                            < RingLoader className='m-auto' color="#e5f15f" size={100} />
                        </div >
                        :
                        // Se mapean los productos 
                        cart.map(product => (
                            <Cart product={product} key={product.id} />
                        ))
                }
            </div>
            <NavLink to='/' className={({ isActive }) => isActive ? 'slide-in-bck-leftf m-auto bg-gray-700 border-2 border-transparent mr-4' : ' flex flex-col justify-center mt-4 lg:inline-block lg:mt-0 border-2  border-transparent mr-4'} >

                <div className="flex flex-col justify-end mb-0  items-center text-blue-500 ">
                    <span className="font-semibold text-xl focus-in-expand-fwd">Home</span>
                </div>

            </NavLink>
        </div>
    )
}
