import React from 'react';
import styled from "styled-components";

const HeightFix = styled.div`
width: 100vw;
height:191px;
@media (max-width: 550px) {
height:100px;
 }
`;


function NavHeightFixer() {
    return (
        <HeightFix/>

    );
}

export default NavHeightFixer;



