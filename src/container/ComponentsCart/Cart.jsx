import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'



export const Cart = ({ product, key }) => {
    const { removeItem } = useContext(CartContext)

    const totalOfAProduct = product.count * product.price

    return (
        <div key={`OrderItem-${key}`} className='flex  flex-row justify-around aling items-center w-11/12 m-auto mt-2 border-gray-200 border-b-2 p-14 bg-white'>
            <img src={product.image} alt="Imagen" className='w-20 padding-5 shadow-2xl rounded-xl	h-1/2	 p-0.5 ' />
            <div className=" w-1/2 flex flex-col">
                <span className=" font-mono text-xl mb-2">{product.categoria}</span>
                <div className='flex w-full justify-start'>
                    <span className="font-sansf list-none text-slate-500 text-xs mb-2 ml-2">({product.title})</span>
                    <span className='font-sansf list-none text-slate-500 text-xs mb-2 ml-2'>Cantidad: {product.count}</span>
                    <span className='font-sansf list-none text-slate-500 text-xs mb-2 ml-2'>Precio: ${product.price}</span>
                    <span className='font-sansf list-none text-blue-600 text-xs mb-2 ml-2'>
                        {
                            <Link onClick={() => removeItem(product.id)} to={`/item/${product.id}`}>
                                Modificar
                            </Link>
                        }
                    </span>
                </div>
            </div>
            <div>
                <button onClick={() => removeItem(product.id)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <p>Total: ${totalOfAProduct}</p>
        </div>
    )
}
