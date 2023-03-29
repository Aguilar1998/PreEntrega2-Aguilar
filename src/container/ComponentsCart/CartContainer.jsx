import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import { CartContext } from '../../Context/CartContext'
import { Cart } from './Cart'
export const CartContainer = () => {
    const { cart, loading, getTotalPrice, clearCart, finCart } = useContext(CartContext)

    console.log(cart);
    return (
        <div className='flex w-11/12 max-w-6xl border-2 drop-shadow-lg rounded-md mt-14 m-auto flex-col justify-center p-14 bg-white'>
            {
                loading
                    ?
                    <div className='flex flex-col h-3/6 justify-center'>
                        < RingLoader className='m-auto' color="#e5f15f" size={100} />
                    </div >
                    :
                    (cart.length !== 0)
                        ?
                        cart.map(product => (<Cart product={product} key={product.id} />)) :
                        <div className='flex flex-col justify-around aling items-center w-3/4 m-auto mt-2 border-gray-200 rounded-lg border-2 p-14  bg-white'>
                            <h1>Tu carrito está vacío</h1>
                            <p className='font-sansf list-none text-slate-500 text-xs'>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
                            <Link to='/Servicios' className=' flex justify-end pt-10'>
                                <button className="font-6 w-1/10 flex-col items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300">Ver servicios</button>
                            </Link>
                        </div>
            }

            <div className='flex flex-col w-11/12 m-auto'>
                <div className='flex ml-auto pt-10'>
                    <h3 className=' m-auto mr-20 text-3xl'>Total: </h3>
                    <h3 className='m-auto text-3xl'>$ {getTotalPrice()}</h3>
                </div>
                <Link to={(cart.length === 0) ? '/CartContainer' : '/'} className="flex justify-end pt-10 my-10 border-gray-200 border-t-2  ">
                    <button className="font-6 w-1/10 flex-col items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-green-300" onClick={() => finCart()}>Finalizar Compra</button>
                </Link>
                <Link to='/Servicios' className=' flex justify-end border-gray-200 border-t-2 pt-10'>
                    <button className="font-6 w-1/10 flex-col items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300">Ver servicios</button>
                </Link>
                <button className='ml-auto mt-10 pl-3 pr-3 text-slate-500  hover:text-white hover:bg-red-600  rounded-xl' onClick={() => clearCart()} >
                    Vaciar Carrito
                </button>
            </div>

        </div >
    )
}
