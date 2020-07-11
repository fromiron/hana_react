import React from 'react';
import styled from "styled-components";


const SnsInnerWrapper = styled.section`
width: 100%;
max-width: 1280px;
display: flex;
justify-content: space-evenly;
background-color: white;
overflow: hidden;
padding: 4rem;
`;

const StyledSns = styled.div`

width: 100%;
box-sizing: border-box;
background: white;
display: flex;
justify-content: center;
transition: all 0.5s ease;
`;

const SnsWrapper = styled.div`

  box-shadow: 0 -2px 5px #efefef, 0 5px 10px #e5e5e5;

`;

function Contact() {
    return (
        <StyledSns>
            <SnsInnerWrapper>
                <SnsWrapper>
                    <a className="twitter-timeline" data-width="480" data-height="700" data-dnt="true"
                       href="https://twitter.com/rabbitsitterH"/>
                </SnsWrapper>

            </SnsInnerWrapper>

        </StyledSns>

    );
}

export default Contact;
