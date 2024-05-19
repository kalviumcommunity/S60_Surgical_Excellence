import React from 'react';
import NavBar from './Components/NavBar';
import MainPage from './Components/MainPage';
import {Route,Routes,BrowserRouter,Link} from "react-router-dom";
function App() {
    return (
            <div>
                <Routes>
                <Route path="/" element={<NavBar/>}/>
                <Route path="/Add" element={<MainPage/>}/>
            </Routes>
            </div>
    );
}

export default App;