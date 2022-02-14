import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Agregar from '../components/Agregar';
import { Playlist } from '../components/Playlist';

export const App = () =>{

    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path="" element={<Playlist/>}/>
                    <Route exact path="/agregar" element={<Agregar/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}