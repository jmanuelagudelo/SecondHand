import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../styles/global.css';

import Layout from "../containers/Layout";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../containers/Login';
import RecoveryPassword from "../containers/RecoveryPassword";


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/password-recovery" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
  
  export default App;