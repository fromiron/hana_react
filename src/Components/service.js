import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";

const ServiceInnerWrapper = styled.section`
width: 100%;
max-width: 1280px;
display: flex;
justify-content: space-evenly;
background-color: white;
overflow: hidden;
@media (max-width: 768px) {
flex-direction: column;
justify-content: center;

padding: 0 5em;
display: block;
margin-top:10px;
overflow: visible;

}
`;
const StyledService = styled.div`
padding-top: 10px;
width: 100%;
box-sizing: border-box;
max-height: 630px;
background: white;
display: flex;
justify-content: center;
transition: all 0.5s ease;

@media (max-width: 768px) {
max-height:1000px;

}

@media (max-width: 550px) {
max-height:1500px;
}

`;

const ServiceBox = styled.div`
max-width: 342px;
max-height: 630px;
overflow: hidden;
margin-bottom: 2em;

@media (max-width: 768px) {
max-width:100%;
box-shadow: 1px 0 3px 2px rgba(180,180,180,0.25);

}

@media (max-width: 550px) {
max-height:1500px;
margin-bottom: 2em;
max-width:none;
width: 100%;


}
`;
const InnerImg = styled.img`
width: 100%;
object-fit: cover;
transition: all 0.5s ease;
&:hover{
opacity: 0.8;
}
@media (max-width: 768px) {
width:45%;
height: 45%;
}

@media (max-width: 550px) {
height: 200px;
width: 100%;
object-fit:  cover;
box-sizing: border-box;
}
`;

const ImageTitleWrapper = styled.div`
overflow: hidden;

    position: relative;
transition: all 0.5s ease;
&::before{
   content: '';
background-color: #FF6082;
    position: absolute;
    margin-right: 5em;
    left: -100%;
    bottom:-0.2em;
    width: 100%;
      height: 7px;
    top: 0;
    transition: all 0.4s;
    z-index: 970;

}
&:hover::before{
left: 0;
}

@media (max-width: 768px) {
display: flex;
flex-direction: row;
justify-content: center;
}
@media (max-width: 550px) {
flex-direction: column;
justify-content: center;
transition: all 0.5s ease-in-out;

}
`;

const TitleInnerWrapper = styled.div`
padding: 1rem; 
display: flex;
justify-content: center;
flex-direction: column;
@media (max-width: 768px) {
padding: 0 1rem; 
}
@media (max-width: 550px) {
z-index: 999;
padding: 0; 
height: auto;
}
`;

const ServiceTitle = styled.div`
text-align: center;
font-size: 30px;
color: #8e8e8e;
transition: all 0.5s ease;
font-family: 'Kosugi Maru', sans-serif;
&:hover{
color:#FF6082;

}

@media (max-width: 768px) {
max-width: 100%;
text-align: center;
font-size: 35px;
margin-bottom: 1rem;
padding: 1rem;

@media (max-width: 550px) {
border-bottom: none;
position: relative;
top:-50px;
left: 50%;
font-size: 30px;
padding: 1.5rem 4rem;
transform: translateX(-50%);
width: max-content;
background-color: white;
z-index: 997;
margin-bottom: 0;
border-radius: 4px 4px 0 0;
box-shadow: 2px -3px 5px -2px rgba(180,180,180,0.25);
}
`;

const ServiceSubTitle = styled.div`
text-align: center;
font-size: 18px;
color: #565656;
margin: 1em 0;
padding: 0 1em;
@media (max-width: 768px) {
font-size: 20px;
padding: 0;
margin: 0.5em 0;
color: #FF6082;
}
@media (max-width: 550px) {
position: relative;
top:-5rem;
padding: 1rem;
margin: 0;
right: -50%;
transform: translateX(-50%);
width: max-content;
overflow: hidden;
    z-index: 999;
color: #979797;
&::before{
   content: '';
    position: absolute;
    left: 0;
    bottom:0.5rem;
    width: 100%;
    height: 1rem;
    transition: all 0.4s;
    border-radius: 5px;
    z-index: -1;
    background-color: #dbdbdb;

}


}




`;

const ServiceText = styled.div`
font-size: 1.7rem;
color: #565656;
padding:0.5em 1em;
margin-bottom: 2em;
word-break: initial;
font-family: 'Kosugi Maru', sans-serif;
line-height: 2.5rem;
@media (max-width: 768px) {
padding:0;

}
@media (max-width: 550px) {
position: relative;
top:-2rem;
padding: 0 3rem;

}


`;

const Stroke = styled.div`
border-top: 2px #D6D6D6 solid;
width: 50%;
margin: 1em auto;
@media (max-width: 768px) {
display: none;
}
`;


function Service() {
    return (
        <StyledService>
            <ServiceInnerWrapper>
                <Fade bottom>
                    <ServiceBox>

                        <ImageTitleWrapper> <InnerImg src={s1}/>
                            <Stroke/>


                            <TitleInnerWrapper><ServiceTitle>優しさ</ServiceTitle>
                                <ServiceSubTitle>家族のようなお世話</ServiceSubTitle>
                                <ServiceText>うさぎと飼い主さんのより良い生活をサポートします。うさぎさんがストレスを感じることなくお留守番ができるようお手伝いします。</ServiceText>
                            </TitleInnerWrapper>


                        </ImageTitleWrapper>
                    </ServiceBox></Fade>

                <Fade bottom>
                    <ServiceBox>
                        <ImageTitleWrapper> <InnerImg src={s2}/>
                            <Stroke/>

                            <TitleInnerWrapper>
                                <ServiceTitle>安心</ServiceTitle>
                                <ServiceSubTitle>安心出来る専門性</ServiceSubTitle>

                                <ServiceText>うさぎの飼育経験があり、お世話に慣れているスタッフが対応いたします。デリケートなうさぎさんも安心してご利用いただけます。
                                </ServiceText> </TitleInnerWrapper>


                        </ImageTitleWrapper>
                    </ServiceBox></Fade>

                <Fade bottom>
                    <ServiceBox>
                        <ImageTitleWrapper> <InnerImg src={s3}/>
                            <Stroke/>

                            <TitleInnerWrapper><ServiceTitle>カスタムケア</ServiceTitle>
                                <ServiceSubTitle>柔軟な対応</ServiceSubTitle>
                                <ServiceText>様々なペットのシッティング経験があります。うさぎさんと一緒に生活しているワンちゃん、ネコちゃんなどのお世話もお任せください。</ServiceText>
                            </TitleInnerWrapper>

                        </ImageTitleWrapper>
                    </ServiceBox></Fade>

            </ServiceInnerWrapper>

        </StyledService>

    );
}

export default Service;
