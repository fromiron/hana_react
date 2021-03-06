import React from 'react';
import styled from "styled-components";
import Nanbokusen from "./nanbokusen";
import Touzaisen from "./touzaisen";
import Tohosen from "./tohosen";
import Fade from 'react-reveal/Fade';

const FareWrapper = styled.div`
    width: auto;
    margin: 1rem;
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
    box-shadow: 0 5px 5px rgba(40,40,40,0.2),0 15px 25px rgba(87,87,87,0.2),0 0 5px rgba(21,21,21,0.2);
    top:-2px;
    }
    @media screen and (max-width: 550px){
        margin: 0.2rem 0.1rem;
    }
`;


const FareItem = styled.div`
width: 100%;
`;
const Traffic = styled.div`
font-size: 1.2rem;
margin-bottom: 1rem;
background-color: gray;
width: fit-content;
padding: 2px;
color: white;
margin-left: 0.5rem;

`;
const TrafficDetail = styled.div``;
const TrafficInfo = styled.div`

width: 100%;
`;
const Station = styled.div`
width: 100%;
font-size: 2rem;
margin: 1rem 0;
text-align: center;


`;
const FareInfo = styled.div`
     font-size: 2rem;
     line-height: 2rem;
     background-color: #ff6082;
     color: white;
     width: 100%;
     padding: 2px 0;
     text-align: center;
     border-radius: 1rem;
`;

const StyledOl = styled.ol`
width: 33%;
`;

const ListWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
`;

const Info = styled.div`
margin-bottom: 2rem;
font-size: 1.5rem;
line-height: 2rem;
padding: 0 2rem;
text-align: left;
`;

const SpecialInfo = styled.div`
text-align: center;
font-size: 1.4rem;
margin-bottom: 1rem;
`;


function Fare() {


    const StationWrapper = ({traffic, station, fare, color}) => (
        <FareWrapper>
            <FareItem>
                <Traffic style={{backgroundColor: color}}>{traffic}</Traffic>
                <TrafficDetail>
                    <TrafficInfo>
                        <Station>{station}</Station><FareInfo
                        style={{backgroundColor: color}}>{fare}円</FareInfo>
                    </TrafficInfo>
                </TrafficDetail>
            </FareItem>
        </FareWrapper>

    )

    return <>
        <Info>
    <span>
   拠点最寄り駅である地下鉄南北線「中島公園駅」より
   お客様宅までの実費交通費を頂戴いたします。詳細はお気軽にお問合せくださいませ。

    </span>
        </Info>

        <Fade bottom>
            <FareWrapper>
                <FareItem>
                    <Traffic style={{backgroundColor: "gray"}}>市電</Traffic>
                    <TrafficDetail>
                        <TrafficInfo>
                            <Station>札幌市電</Station>
                            <SpecialInfo>※一部無料区間あり。詳細はお問い合わせくださいませ。</SpecialInfo>
                            <FareInfo
                                style={{backgroundColor: "gray"}}>400円</FareInfo>
                        </TrafficInfo>
                    </TrafficDetail>
                </FareItem>
            </FareWrapper>
        </Fade>

        <ListWrapper>

            <StyledOl>
                <Fade bottom>
                    {Nanbokusen.map((station, index) => (
                        <StationWrapper key={index} traffic="南北線" station={station.station} fare={station.fare}
                                        color="#5a935e"/>
                    ))}
                </Fade>
            </StyledOl>

            <StyledOl>
                <Fade bottom>
                    {Touzaisen.map((station, index) => (
                        <StationWrapper key={index} traffic="東西前" station={station.station} fare={station.fare}
                                        color="#f8a14a"/>
                    ))}
                </Fade>
            </StyledOl>
            <StyledOl>
                <Fade bottom>
                    {Tohosen.map((station, index) => (
                        <StationWrapper key={index} traffic="東豊線" station={station.station} fare={station.fare}
                                        color="#1d8cfb"/>
                    ))}
                </Fade>
            </StyledOl>

        </ListWrapper>

    </>

}

export default Fare;