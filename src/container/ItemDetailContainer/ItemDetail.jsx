import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import '../../assets/index.css'
import AppContext from "../../Context/AppContext";


export const ItemDetail = ({ product }) => {
  const [goToCart, setGoToCart] = useState()
  const { addToCart } = useContext(AppContext)
  const [toggleOrders, setToggleOrders] = useState(false)

  const onAdd = (cant) => {
    console.log(cant);
    setGoToCart(cant)
  }
  const handleClick = (cant) => {
    addToCart(cant)
  }

  return (
    <div className='flex flex-row justify-center w-3/4 m-auto mt-32 border-gray-200 rounded-lg border-2 p-14   bg-yellow-50 '>
      <img src={product.image} alt="" className='w-2/5 padding-5 shadow-2xl rounded-xl	h-1/2	 p-0.5 ' />
      <div className="ml-12 flex flex-col">
        <div className="font-light text-xl mb-2">{product.categoria}</div>
        <div className="w-1/2 ">
          {
            goToCart ?
              <div className="w-full flex justify-evenly pt-3 border-t-2 border-gray-300 rotate-diagonal-1  ">

                <Link to='/CartContainer' onClick={() => setToggleOrders(!toggleOrders)} >
                  <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300">Ir al carrito</button>
                </Link>
                
                <Link to='/'>
                  <button className="font-6 w-full inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300">Ver mas servicios</button>
                </Link>
              </div>
              :
              <ItemCount onAdd={onAdd} handleClick={handleClick} />
          }
        </div>
        <div className="px-6 py-4 flex flex-col justify-around">
          <div className="font-bold text-2xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">
            {product.text}
          </p>
          <p className="text-gray-700 text-base">
            {product.description}
          </p>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{product.hashtag1}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{product.hashtag2}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#{product.hashtag3}</span>
          </div>
        </div>
      </div>
    </div>
  )
}