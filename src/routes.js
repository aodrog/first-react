import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlanetsScreen from './views/planets';

function Views() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PlanetsScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Views;