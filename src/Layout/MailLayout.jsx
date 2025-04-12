import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Footer/Navbar/Navbar';

const MailLayout = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp') // pathname e login jorito ache ki na seta;

    return (
        <div>
            {/* location er pathname jodi login hoy tahole navbar hide thakbe ba dekhabe na */}
            {noHeaderFooter || <Navbar></Navbar>} 
            <section className='min-h-[calc(100vh-585px)]'>
                <Outlet></Outlet>
            </section>
            {/* location er pathname jodi login hoy tahole footer hide thakbe ba dekhabe na */}
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MailLayout;