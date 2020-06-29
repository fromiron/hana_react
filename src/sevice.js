import React from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';

import s1 from "./images/s1.png";
import s2 from "./images/s2.png";
import s3 from "./images/s3.png";

const ServiceInnerWrapper = styled.section`
width: 100%;
max-width: 1280px;
display: flex;
justify-content: space-evenly;
background-color: white;
overflow: hidden;

`;
const StyledService = styled.div`
padding-top: 10px;
width: 100%;
box-sizing: border-box;
max-height: 600px;
background: white;
display: flex;
justify-content: center;
@media (max-width: 768px) {
height: 450px;

}
`;

const ServiceBox = styled.div`
max-width: 342px;
max-height: 600px;
overflow: hidden;
margin-bottom: 2em;
`;
const InnerImg = styled.img`
width: 100%;
object-fit: cover;
transition: all 0.5s ease;
&:hover{
opacity: 0.8;
position: relative;
transform: scaleX(1.01);
}
`;


const ServiceTitle = styled.div`
text-align: center;
font-size: 30px;
color: #565656;
transition: all 0.5s ease;
&:hover{
color:#FF6082;
}
`;

const ServiceSubTitle = styled.div`
text-align: center;
font-size: 18px;
color: #565656;
margin: 1em 0;
padding: 0 1em;

`;

const ServiceText = styled.div`
text-align: center;
font-size: 13px;
color: #565656;
padding:1em;
`;


const Stroke = styled.div`
border-top: 2px #D6D6D6 solid;
width: 50%;
margin: 1em auto;
`;

function Service() {
    return (
        <StyledService>
            <ServiceInnerWrapper>
                <Slide top cascade>
                    <ServiceBox>

                        <InnerImg src={s1}/>
                        <Stroke/>
                        <ServiceTitle>優しい</ServiceTitle>
                        <ServiceSubTitle>家族のようにお世話します。</ServiceSubTitle>
                        <ServiceText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
                            recusandae. </ServiceText>
                    </ServiceBox></Slide>

                <Slide top cascade><ServiceBox>
                    <InnerImg src={s2}/>
                    <Stroke/>
                    <ServiceTitle>安心</ServiceTitle>
                    <ServiceSubTitle>出来るサービスを提供します。</ServiceSubTitle>
                    <ServiceText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
                        recusandae. </ServiceText>
                </ServiceBox></Slide>

                <Slide top cascade><ServiceBox>
                    <InnerImg src={s3}/>
                    <Stroke/>
                    <ServiceTitle>カスタムケア</ServiceTitle>
                    <ServiceSubTitle>対応できます。</ServiceSubTitle>
                    <ServiceText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
                        recusandae. </ServiceText>
                </ServiceBox></Slide>

            </ServiceInnerWrapper>

        </StyledService>

    );
}

export default Service;
