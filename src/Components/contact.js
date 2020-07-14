import React from 'react';
import styled from "styled-components";
import tel from '../images/tel.svg';
import line from '../images/line.svg';
import mail from '../images/mail.svg';
import qr from '../images/qr.png';

const ContactInnerWrapper = styled.section`
width: 100%;
max-width: 1280px;
display: flex;
overflow: hidden;
background: #f8f8f8;
padding: 5rem;
flex-direction: column;
font-size: 2rem;
color: #565656;
text-align: center;
@media (max-width: 550px) {
    
        padding: 3rem 1rem;
    }
`;

const StyledContact = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
transition: all 0.5s ease;
`;

const ContactTitle = styled.div`
font-size: 4rem;
margin-bottom: 1rem;
`;

const ContactSubTitle = styled.div`

`;

const ContactTextWrapper = styled.div`
margin: 3rem 0;
line-height:5rem;
`;

const IconWrapper = styled.img`

margin: 0 1rem;
transition: all 0.2s ease;
transform-origin:bottom;
&:hover{
animation: shakeIcon 0.5s infinite;
}
@keyframes shakeIcon {
  0% {
  transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
   100% {
    transform: rotate(0deg);  }
}
`;

const ContactSmallText = styled.div`

color: #ff6082;
line-height: normal;
margin-top: 3rem;
width: 100%;
    `;

const ContactSmallTextSpan = styled.span`
font-size: 1.5rem;
padding: 1rem;
width: auto;
line-height: 3rem;
    `;


const Text = styled.span`
display: flex;
justify-content: center;
min-width: 350px;
`;

const Line = styled.div`
transition: all 0.2s ease;
position: relative;
height: 100%;
display: flex;
line-height: 7rem;
&::before{
transition: all 0.2s ease;
content:""; 
position:absolute;
left:50%;
top:-100%;
display:none;
width:150px;
height:150px;
background: #F8F8F8 url(${qr}) center no-repeat;;
background-size:contain;
border: 2px gray solid;
border-radius: 10px;
z-index:999;
}
&:hover:before{
display:block;
cursor: none;
}

`;

function Contact() {

    return (
        <StyledContact>
            <ContactInnerWrapper>

                <ContactTitle>Contact</ContactTitle>
                <ContactSubTitle>ご連絡</ContactSubTitle>
                <ContactTextWrapper>
                    <Text>ご連絡は070-8433-6363<IconWrapper src={tel}/></Text>

                    <Text>または</Text>
                    <Text><Line><IconWrapper src={line}/></Line>と<IconWrapper src={mail}/>どちらでも出来ます。</Text>
                    <Text>お気軽に連絡してください。</Text>

                    <ContactSmallText><ContactSmallTextSpan>※メール、ラインでは24時間お受けできますが電話の場合は朝10時より午後17時までとなっております。</ContactSmallTextSpan></ContactSmallText>
                </ContactTextWrapper>
            </ContactInnerWrapper>

        </StyledContact>

    );
}

export default Contact;
