// Root.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import MyAppBar from './components/AppBar/AppBar';
// import NavBar from './components/NavBar';
import Footer from './components/Sections/Footer';

const Root = () => {
    return (
        <div>
            <MyAppBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;
