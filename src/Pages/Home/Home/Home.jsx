import React from 'react';
import Banner from '../../Shared/Footer/Banner/Banner';
import PopularCategories from '../../../components/HomeCategories/PopularCategories';
import ServiceCategories from '../../../components/HomeCategories/ServiceCategories';
import FeaturedCategories from '../../../components/HomeCategories/FeaturedCategories';
import Banner2 from '../../../components/HomeCategories/Banner2';
import PricingCategories from '../../../components/HomeCategories/PricingCategories';
import BlogCategories from '../../../components/HomeCategories/BlogCategories';
import StatHome from '../../../components/HomeCategories/StatHome';
import Testimonials from '../../../components/HomeCategories/Testimonials';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PopularCategories></PopularCategories>
            <ServiceCategories></ServiceCategories>
            <FeaturedCategories></FeaturedCategories>
            <Banner2></Banner2>
            <PricingCategories></PricingCategories>
            <StatHome></StatHome>
            <BlogCategories></BlogCategories>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;