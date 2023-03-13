import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../styles/global.css';

import Layout from "../containers/Layout";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import RecoveryPassword from "../pages/RecoveryPassword";
import EmailSend from "../pages/EmailSend";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders"

import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
        <BrowserRoute basename="/SecondHand">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/myaccount" element={<MyAccount/>}/>
                    <Route path="/signup" element={<CreateAccount/>}/>
                    <Route path="/new-password" element={<NewPassword/>}/>
                    <Route path="/password-recovery" element={<RecoveryPassword />} />
                    <Route path="/emailsend" element={<EmailSend/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRoute>
        </AppContext.Provider>
    );
};
  
  export default App;