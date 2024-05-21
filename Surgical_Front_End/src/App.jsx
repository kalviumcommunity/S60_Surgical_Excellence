import React from 'react';
import NavBar from './Components/NavBar';
import MainPage from './Components/MainPage';
import Edit from './Components/Edit';
import {Route,Routes,BrowserRouter,Link} from "react-router-dom";
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import UserSearch from './Components/UserSearch';
function App() {
    return (
            <div>
                <Routes>
                <Route path="/" element={<NavBar/>}/>
                <Route path="/Add" element={<MainPage/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/search" element={<UserSearch/>}/>
            </Routes>
            </div>
    );
}

export default App;