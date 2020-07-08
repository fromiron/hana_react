import React from 'react';
import '../index.css';
import Header from '../Components/header';
import styled from "styled-components";
import Footer from '../Components/footer';

const SectionTitle  = styled.div`
width: 100vw;
height: auto;
font-size: 90px;
`;




function ServicePage() {
    return (

        <>
            <Header/>

            <SectionTitle>Service page</SectionTitle>
            <Footer/>
        </>
    );
}

export default ServicePage;


