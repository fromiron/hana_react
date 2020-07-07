import React from 'react';
import '../index.css';
import Header from '../Components/header';
import Service from "../Components/service";
import MainSlider from "../Components/slider";
import Use from "../Components/use";
import Sns from '../Components/sns';
import Contact from "../Components/contact";
import Footer from "../Components/footer";

function HomePage() {
    return (

        <>
            <Header/>
            <MainSlider/>
            <Service/>
            <Use/>
            <Sns/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default HomePage;


