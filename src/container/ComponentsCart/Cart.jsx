import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'



export const Cart = ({ product, key }) => {
    const { removeItem } = useContext(CartContext)

    const totalOfAProduct = product.count * product.price

    return (
        <div key={`OrderItem-${key}`} className='flex  flex-row justify-around aling items-center w-3/4 m-auto mt-32 border-gray-200 rounded-lg border-2 p-14   bg-yellow-50'>
            <img src={product.image} alt="Imagen" className='w-20 padding-5 shadow-2xl rounded-xl	h-1/2	 p-0.5 ' />
            <div className="ml-12 flex flex-col">
                <div className="font-light text-xl mb-2">{product.categoria}</div>
                <div className="font-light text-xl mb-2">({product.title})</div>
            </div>
            <div className="w-1/2 ">
                <li>Cantidad: {product.count}</li>
                <li>Precio: ${product.price}</li>
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
