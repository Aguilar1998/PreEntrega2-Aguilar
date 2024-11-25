import { useState, createContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../utils/firebase/config';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)

    const isInCart = (id) => cart.find((item) => item.id === id) ? true : false;
    const MySwal = withReactContent(Swal)

    const addToCart = (producto, count) => {
        MySwal.fire({
            title: <p>Compra finalizada correctamente!</p>,
            didOpen: () => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Servicio Contratado',
                    showConfirmButton: false,
                    timer: 1000
                })()
            },
        }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
        })
        if (isInCart(producto.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === producto.id
                        ? {
                            ...product,
                            count: count + product.count,
                        }
                        : product;
                })

            );

        } else {
            setCart([...cart, { ...producto, count }]);
        }
    };

    const clearCart = () => {
        setCart([])
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Carrito vacio',
            showConfirmButton: false,
            timer: 1000
        })()
    }
    const finCart = () => {

        if (cart.length === 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error',
                text: 'No existen productos para comprar',
                showConfirmButton: false,
                timer: 1500
            })()
        }
        setCart([])
        return (

            MySwal.fire({
                didOpen: () => {
                    if (cart.length > 1) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Compra finalizada correctamente',
                            text: 'Servicios contratados correctamente',
                            showConfirmButton: false,
                            timer: 2500
                        })()
                    }

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Compra finalizada correctamente',
                        text: 'Servicio contratado correctamente',
                        showConfirmButton: false,
                        timer: 2500
                    })()
                },
            }).then(() => {
                return MySwal.fire(<p>Shorthand works too</p>)
            })
        )
    }

    const removeItem = (idToRemove) => {
        let newCart = cart.filter((item) => item.id !== idToRemove)
        setCart(newCart)
    }

    const getTotalPrice = () => {
        return cart.reduce((prev, act) => prev + act.count * act.price, 0)
    }

    const { id } = useParams()

    useEffect(() => {
        getItems(id)
            .then(resp => setLoading(false))
    }, [id])

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                finCart,
                removeItem,
                getTotalPrice,
                loading,

            }}>
            {children}
        </CartContext.Provider>
    )
}
