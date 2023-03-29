import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartContainer } from './container/ComponentsCart/CartContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './container/ItemsListContainer/ItemListContainer'
import NavBar from './container/ComponentsNavBar/NavBar'
import { CartProvider } from './Context/CartContext'
import Servicio from './page/Servicio'
import FormComentario from './page/FormComentario'
import { Home } from './page/Home'



const App = () => {
    return (
        <CartProvider>
            <BrowserRouter className='container mx-auto'>
                <NavBar />
                <Routes>
                    <Route path='/Servicios' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/Item/:detaliId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<Navigate to='/Home' />} />
                    <Route path='/CartContainer' element={<CartContainer />} />
                    <Route path='/FormComentario' element={<FormComentario />} />
                    <Route path='/Servicios' element={<Servicio />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App



