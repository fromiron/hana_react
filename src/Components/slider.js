import React, {Component} from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import Flip from 'react-reveal/Flip';


const StaticWrapper = styled.div`
position: static;
width: 100%;
height: 530px;
background-color: white;
overflow: hidden;
     @media (max-width: 768px) {
height: 520px;
        }
`;

const StyledSlider = styled.div`
position: absolute;
top: 191px;
width: 100%;
height: 720px;
overflow: hidden;
     @media (max-width: 768px) {
top: 100px;
        }
`;
const ImgWrapper = styled.div`
&:focus{
border:0;
outline: 0;
width: 100%;
`;
const Img = styled.img`
position: relative;
width: 100%;
  display : block ;
  text-align : center ;
height: 500px;
max-width: 1280px;
background-repeat: no-repeat;
object-fit: cover;
object-position: 0 30%;
margin: 0 auto;
&:focus{
border:0;
outline: 0;
`;

const MainMessage = styled.div`
display:flex;
width: 100%;
border:0;
outline: 0;
color: white;
&:focus{
border:0;
outline: 0;
}

`;
const MainMessageInnerWrapper = styled.div`
position: relative;
text-align: center;
vertical-align:middle;
height: 500px;
background-color: #F8F8F8;
width: 100%;

`;
const MainMessageInnerText = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%); 
color: #565656;
font-size: 3rem;
@media (max-width: 550px) {
     font-size: 2rem;
}
`;
const InnerTextBig = styled.div`
margin: 1em 0;
font-size: 1.5em;
min-width: 300px;
line-height: 5rem;
word-break: keep-all;
`;

const TextHana = styled.div`
animation: tracking-in-contract 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

@keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
`;

const SmallText = styled.div`
font-size: 0.5em;
animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.5s both;
margin-bottom: 2em;

@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
`;

const PinkBtn = styled.button`
width: 150px;
height: 48px;
background-color:#FF6082;
color: white;
transition: all 1s ease;
cursor: pointer;
&:hover{
background-color: #565656;
}

animation: text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)1.5s both;

@keyframes text-focus-in {
  0% {
            filter: blur(12px);
    opacity: 0;
  }
  100% {
            filter: blur(0px);
    opacity: 1;
  }
}

`;


class MainSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {img: img1},
                {img: img2},
                {img: img3},
            ]
        };
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (

            <StaticWrapper>
                <StyledSlider>
                    <Slider {...settings}>
                        <MainMessage>
                            <MainMessageInnerWrapper>
                                <MainMessageInnerText>
                                    <Flip left cascade>
                                        うさぎ向けペットシッター
                                    </Flip>

                                    <InnerTextBig>
                                        <Flip left cascade>
                                            <div>うさぎとの生活を</div>
                                            <div>より良いものに</div>
                                        </Flip>
                                    </InnerTextBig>

                                    <TextHana>HANA</TextHana>
                                    <SmallText>
                                        Rabbit sitter
                                    </SmallText>

                                    <Link to="/contact"><PinkBtn>CONTACT</PinkBtn></Link>
                                </MainMessageInnerText>
                            </MainMessageInnerWrapper>

                        </MainMessage>
                        {this.state.images.map((image, index) => {
                            return (<ImgWrapper><Img key={index} src={image.img}/></ImgWrapper>)
                        })}

                    </Slider>
                </StyledSlider>
            </StaticWrapper>
        );
    }
}

export default MainSlider;
