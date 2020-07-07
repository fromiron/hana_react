import React from 'react';
import styled from "styled-components";

const FooterInnerWrapper = styled.section`
width: 100%;
max-width: 1280px;
display: flex;
overflow: hidden;
background: #565656;
padding: 5rem;
flex-direction: column;
font-size: 2rem;
color: white;
text-align: center;
`;

const StyledFooter = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
transition: all 0.5s ease;
`;


function Contact() {

    return (
        <StyledFooter>
            <FooterInnerWrapper>

                    footer
            </FooterInnerWrapper>

        </StyledFooter>

    );
}

export default Contact;
