import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import PageError from './components/Error'
import { CartProvider } from './context/Context'
import { CartContainer } from './components/CartContainer'
import { Checkout } from './components/checkout'


export default function App(){
    return(
        <BrowserRouter>
        <CartProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:category" element={<ItemListContainer/>}/>
                <Route path='/smartphone/:id' element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<CartContainer/>}/>
                <Route path='*' element={<PageError/>}/>
                <Route path="/checkout" element={<Checkout/>}></Route>
            </Routes>
        </CartProvider>
        </BrowserRouter>
    )
}
