import React from 'react';
import styled from "styled-components";

const StyledPrice = styled.section`
padding-top: 35px;
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
color: #565656;
background-color: white;

`;


const PriceInnerWrapper = styled.div`
width: 100%;
max-width: 980px;
height: 600px;
position: relative;
text-align: center;
`;


function Price() {
    return (
        <StyledPrice>
            <PriceInnerWrapper>

            </PriceInnerWrapper>

        </StyledPrice>


    );
}

export default Price;
