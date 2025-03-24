import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Footer/Navbar/Navbar';

const MailLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className='min-h-[calc(100vh-585px)]'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MailLayout;