import React from 'react';
import NavBar from './Components/NavBar';
import {Route,Routes,BrowserRouter,Link} from "react-router-dom";
function App() {
    return (
            <div>
                <Routes>
                <Route path="/" element={<NavBar/>}/>
                
            </Routes>
            </div>
    );
}

export default App;