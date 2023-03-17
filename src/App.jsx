import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartContainer } from './container/ComponentsCart/CartContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './container/ItemsListContainer/ItemListContainer'
import NavBar from './container/ComponentsNavBar/NavBar'
import Login from './page/Login'
import { CartProvider } from './Context/CartContext'
import { Productos } from './page/Productos'
import Servicio from './page/Servicio'




// ---------------- Nuevo Context ---------------- //

// const CartContext = createContext()

// ---------------- Nuevo Context ---------------- //



const App = () => {
    return (
        <CartProvider>
            <BrowserRouter className='container mx-auto'>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/Item/:detaliId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<Navigate to='/' />} />
                    <Route path='/CartContainer' element={<CartContainer />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Servicios' element={<Servicio />} />
                    <Route path='/Productos' element={<Productos />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App



