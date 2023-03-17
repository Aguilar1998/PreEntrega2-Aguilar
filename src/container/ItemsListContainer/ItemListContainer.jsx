import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import ItemList from './ItemList'


// --------------- Contenedor para listar las Card ------------- // 
const ItemListContainer = () => {
    // --------------- Estado ------------- // 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    /* A hook that is called when the component is mounted and when the categoryId changes. */
    useEffect(() => {
        const firebaseQuerys = () => {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            const queryCollectionFilter = categoryId ? query(queryCollection, where('categoria', '==', categoryId)) : queryCollection

            getDocs(queryCollectionFilter)
                .then(respuestaPromesa => {
                    setProductos(respuestaPromesa.docs.map(prod => ({ id: prod.id, ...prod.data() })))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        firebaseQuerys()

    }, [categoryId])


    return (
        // --------------- Retornar el Dom ------------- // 
        // --------------- Ocultar/mostrar nodos del render ------------- // 
        <div className='h-screen'>
            {loading
                ?
                <div className='flex flex-col h-3/6 justify-center'>
                    <RingLoader className='m-auto' color="#e5f15f" size={100} />
                </div>
                :
                <ItemList productos={ productos} />
            }

        </div>
    )
};


export default ItemListContainer