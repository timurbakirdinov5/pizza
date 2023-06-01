import './App.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";



function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/cart'} element={<Cart/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
