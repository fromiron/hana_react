import React from 'react';
import '../index.css';
import Header from '../Components/header';
import styled from "styled-components";
import Service from "../Components/service";

const SectionTitle  = styled.div`
width: 100vw;
height: auto;
font-size: 90px;
`;

function AboutPage() {
    return (

        <>
            <Header/>
            <SectionTitle>About page</SectionTitle>



            <Service/>
        </>
    );
}

export default AboutPage;


