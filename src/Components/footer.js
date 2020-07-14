import React from 'react';
import styled from "styled-components";
import wLogo from '../images/logo_w.svg';
import line from '../images/line2.svg';
import instagram from '../images/Instagram.svg';
import twitter from '../images/twitter.svg';

const FooterInnerWrapper = styled.section`
width: 100%;
max-width: 800px;
display: flex;
overflow: hidden;
padding: 2rem 5rem;
flex-direction: column;
font-size: 2rem;
color: white;
text-align: center;
`;

const StyledFooter = styled.div`
border-top: 1px #909090 solid;
background: #A6ADB4;
height: 200px;
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
transition: all 0.5s ease;

`;

const FooterTop = styled.div`
display: flex;
height: 150px;
width: 100%;
justify-content: space-around;

`;

const FooterLogo = styled.div`
max-width:255px;
min-width: 200px;
margin: 2rem;
height:80%;
background: url(${wLogo}) no-repeat center;
background-size: contain;
@media (max-width: 768px) {
display: none;
}
`;
const FooterBottom = styled.div`
width: 100%;
text-align: center;
font-size: 11px;
`;


const FooterNav = styled.div`
box-sizing: border-box;
text-align: left;
padding: 2rem;

height: 100%;
`;

const FooterNavUl = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100%;
@media (max-width: 550px) {
display: none;
}
`;
const FooterNavLi = styled.li`
display: block;
font-size: 1.5rem;
`;


const FooterSns = styled.div`
height: 150px;
width: auto;
padding: 2rem;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-right: 4rem;
@media (max-width: 550px) {
margin-right: 0;
}
`;

const FooterSnsIcon = styled.img`
width: 4rem;
height: 4rem;
`;
const FooterInfo = styled.div`
padding: 0;
width: 300px;
height: 100%;

`;

const FooterInfoTable = styled.table`
width: 300px;
height: 100%;
font-size:13px;
text-align: left;
@media (max-width: 550px) {
font-size:11px;
}
`;

function Contact() {

    return (
        <StyledFooter>
            <FooterInnerWrapper>
                <FooterTop className="footer__top">
                    <FooterLogo className="footer__top-logo"></FooterLogo>
                    <FooterNav className="footer__top-nav">
                        <FooterNavUl>
                            <FooterNavLi>Home</FooterNavLi>
                            <FooterNavLi>About</FooterNavLi>
                            <FooterNavLi>Service</FooterNavLi>
                            <FooterNavLi>Price</FooterNavLi>
                            <FooterNavLi>Contact</FooterNavLi>
                        </FooterNavUl>
                    </FooterNav>
                    <FooterSns className="footer__top-sns">
                        <div className="footer__top-sns__line"><FooterSnsIcon src={line}/></div>
                        <div className="footer__top-sns__instagram"><FooterSnsIcon src={instagram}/></div>
                        <div className="footer__top-sns__twitter"><FooterSnsIcon src={twitter}/></div>
                    </FooterSns>

                    <FooterInfo className="footer__top-info">
                        <FooterInfoTable>
                            <tr>
                                <td colSpan="2">特定商取引法に基づく表記</td>
                            </tr>
                            <tr>
                                <td>代表責任者</td>
                                <td>畑山由樹</td>
                            </tr>
                            <tr>
                                <td>所在地</td>
                                <td>〒062-0932 <br/>
                                    札幌市豊平区平岸2条17丁目1-15-303
                                </td>
                            </tr>
                            <tr>
                                <td>商品の名称</td>
                                <td>シッターサービス</td>
                            </tr>
                            <tr>
                                <td>電話番号</td>
                                <td>070-8433-6363</td>
                            </tr>
                            <tr>
                                <td>メール</td>
                                <td>hana.rbsr@gmail.com</td>
                            </tr>
                        </FooterInfoTable>
                    </FooterInfo>

                </FooterTop>
                <FooterBottom className="footer__bottom">Copyright © Rabbit Sitter HANA 2020. All rights
                    reserved.</FooterBottom>

            </FooterInnerWrapper>

        </StyledFooter>

    );
}

export default Contact;
