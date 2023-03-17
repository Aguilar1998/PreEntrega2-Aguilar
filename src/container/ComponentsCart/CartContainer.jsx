import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import { CartContext } from '../../Context/CartContext'
import { Cart } from './Cart'

export const CartContainer = () => {
    const { cart, loading, getTotalPrice, clearCart } = useContext(CartContext)

    console.log(cart);
    return (
        <div className='flex flex-col justify-start h-screen'>
            <Link to='/' className='m-auto mb-0 mt-5'>
                <button className="font-6 w-1/10 flex-col items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300">Ver mas servicios</button>
            </Link>
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
            <div className='flex flex-col justify-start'>
                <h3 className=' m-auto text-3xl'>Total: ${getTotalPrice()}</h3>
                <button className='m-auto border-2 pl-3 pr-3 border-gray-300 hover:text-white hover:bg-gray-800 hover:border-transparent  rounded-xl' onClick={() => clearCart()} >
                    Vaciar Carrito
                </button>
            </div>
        </div>
    )
}
