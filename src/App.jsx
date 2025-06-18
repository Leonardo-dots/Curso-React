import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import PageError from './components/Error'


export default function App(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/filter/:category" element={<ItemListContainer/>}/>
            <Route path='/smartphone/:id' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<PageError/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}
