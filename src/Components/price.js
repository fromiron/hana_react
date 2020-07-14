import React from 'react';
import styled from "styled-components";
import Plan from "./plan";
import Fare from "../Components/trafficFare";
import full from "../images/full.png";
import half from "../images/half.png"

const StyledPrice = styled.section`
padding-top: 35px;
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
color: #565656;
background-color: #F8F8F8;
height: auto;

`;

const MarinFixer = styled.div`
display: block;
margin: auto auto 3rem auto;
height: auto;


`;

const PriceInnerWrapper = styled.div`
width: 100%;
max-width: 700px;
height: auto;
text-align: center;

  @media (max-width: 550px) {
    width: 90%;

} 
`;

const PageTitle = styled.div`
text-align: center;
font-size: 4rem;
margin-top: 5rem;

`;
const PageSubTitle = styled.div`
text-align: center;
font-size: 2rem;
margin-bottom: 5rem;

`;

function Price() {
    const fullTime = {
        plan: "Plan.1",
        range: 150,
        sub: "1時間コース/しっかりコース",
        color: "#ef8e82",
        detail: "ごはん、おトイレ、おやつ、ブラッシング、へやんぽ *1匹追加：500円",
        price: "2500円",
        price2: " 2000円",
        priceDetail: "Open記念!",
        time: 60
    }

    const halfTime = {
        plan: "Plan.2",
        range: 80,
        sub: "30分コース/ぱぱっとコース",
        color: "#f8a14a",
        detail: "ごはん、おトイレ、おやつ、へやんぽ",
        price2: "2000円",
        time: 30
    }


    return (
        <StyledPrice>
            <PriceInnerWrapper>
                <PageTitle>
                    Price
                </PageTitle>
                <PageSubTitle>
                    ご利用料金
                </PageSubTitle>
                <MarinFixer>
                    <Plan image={full}
                          title={fullTime.plan} range={fullTime.range} color={fullTime.color}
                          sub={fullTime.sub} detail={fullTime.detail}
                          price={fullTime.price}
                          price2={fullTime.price2}
                          priceDetail={fullTime.priceDetail}
                          time={fullTime.time}/>
                </MarinFixer>

                <MarinFixer>
                    <Plan image={half}
                          title={halfTime.plan} range={halfTime.range} color={halfTime.color}
                          sub={halfTime.sub} detail={halfTime.detail}
                          price={halfTime.price}
                          price2={halfTime.price2}
                          time={halfTime.time}/>
                </MarinFixer>
                <PageTitle>
                    Fare
                </PageTitle>
                <PageSubTitle>
                    交通料金
                </PageSubTitle>
                <MarinFixer>
                        <Fare/>
                </MarinFixer>
            </PriceInnerWrapper>
        </StyledPrice>
    );
}

export default Price;
