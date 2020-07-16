import React from 'react';
import styled, {keyframes} from "styled-components";


const PlanWrapper = styled.div`
width: auto;
max-width: 700px;
height: auto;
border: 1px #F8F8F8 solid;
display: flex;
color: #565656;
text-align: left;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
transition: all 0.4s ease;
position: relative;
padding: 1rem;
background-color: white;
&:hover{
box-shadow: 0 5px 5px rgba(255,96,130,0.56),0 15px 25px rgba(255,96,130,0.2),0 0 5px rgba(255,96,130,0.2);
top:-2px;
}
  @media (max-width: 550px) {
  display: block;  
} 

`;

const PlanImageContainer = styled.div`
width: 200px;
max-height: 250px;
overflow: hidden;
background-color: white;
border-radius: 0 20px 20px 0;
@media (max-width: 550px) {
    margin: 1rem auto auto auto;
    width: max-content;
    height: 150px;
    border-radius: 20px;
 }
  
`;
const PlanTextWrapper = styled.div`
max-width: 500px;
height: auto;
background-color: white;
box-sizing: border-box;
padding: 2rem 1rem 1rem 8rem;
font-family: 'Kosugi Maru', sans-serif;

@media (max-width: 768px) {
padding: 2rem;
width:auto;
 }`;

const Title = styled.div`
font-family: 'Nunito', sans-serif;
font-size: 2.8rem;
font-weight: 600;
margin-bottom: 1rem;
  @media (max-width: 550px) {
position: relative;
left: 10%; 
  width: auto;
} 
`;


const SubTitle = styled.div`
font-size: 2rem;
margin-bottom: 1rem;
width: fit-content;
&:after{
content: "";
display: block;
width: initial;
height: 10px;
border-bottom: 2px rgba(0,0,0,0.2) dotted;
}
  @media (max-width: 550px) {
  text-align: center;  
  width: auto;
} 
`;

const DetailDetail = styled.div`
font-size: 1.5rem;
color: #bababa;

`;
const Detail = styled.div`
word-break: keep-all;
font-size: 1.6rem;
line-height: 2.4rem;
margin-bottom: 3rem;
`;

const BottomObjWrapper = styled.div`
display:flex;
`;
const BottomObjTitle = styled.div`
height: auto;
width: 70px;
font-size: 1.6rem;
color: #bababa;
`;

const BottomObj = styled.div`
font-size: 1.6rem;
`;

const PriceDecoration = styled.span`
text-decoration:line-through;
color: #565656;
`;

const bounce = keyframes`
  0% {
  
  }
  50% { top:-32px; }
  100% {
  }
`;

function Plan({image, title, range, color, sub, detail, price, price2,priceDetail, time}) {
    const ImageSize = {
        Height: "auto",
        width: "auto",
    }
    const TitleBefore = {
        display: "inline-block",
        width: range,
        height: "5px",
        marginRight: "1rem",
        backgroundColor: color,

    }
    const RangeBar = styled.div`
        position: relative;
        &:after{
            content: "${time}";
            font-size: 1.5rem;
            font-weight: bold;
            position: absolute;
            right: 0;
            color: white;
            top:-30px;
            width: 20px;
            height: 20px;            
            text-align: center;
            line-height: 2rem;
            background-color: ${color};
            border-radius: 50%;
            animation: ${bounce} 0.7s infinite;
            padding: 1px;
        }
        &:before{
        position: absolute;
            content: "";
            top:-18px;
            right: 1px;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 20px solid ${color};
        }`;

    return <>
        <PlanWrapper>
            <PlanImageContainer>
                <img src={image} style={ImageSize}/>
            </PlanImageContainer>
            <PlanTextWrapper>
                <Title>
                    <RangeBar style={TitleBefore}/>
                    {title}</Title>
                <SubTitle style={{color: color}}>[{sub}]</SubTitle>
                <DetailDetail>お世話内容</DetailDetail>
                <Detail>{detail}</Detail>
                <BottomObjWrapper><BottomObjTitle>Price</BottomObjTitle><BottomObj
                    style={{color: color}}><PriceDecoration>{price}</PriceDecoration>{price2} {priceDetail}
                </BottomObj></BottomObjWrapper>
                <BottomObjWrapper><BottomObjTitle>Time</BottomObjTitle><BottomObj>{time}分</BottomObj>
                </BottomObjWrapper>

            </PlanTextWrapper>

        </PlanWrapper>
    </>
}

export default Plan;