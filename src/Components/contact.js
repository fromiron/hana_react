import React from 'react';
import styled from "styled-components";
import tel from '../images/tel.svg';
import line from '../images/line.svg';
import mail from '../images/mail.svg';
import qr from '../images/qr.png';
import instagram from '../images/insta.svg'
import ContactBtn from "./contactBtn";

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

const ContactMethodWrapper = styled.div`
margin: 3rem 0;
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

const Table = styled.table`
text-align: left;
max-width:500px ;
margin: auto;
`;

const TableTr = styled.tr`

`;

const TableTd = styled.td`
vertical-align: middle;
padding: 3rem 1rem;
line-height: 2.4rem;
font-size: 1.8rem;
`;

const Method = styled.div`
font-size: 1.5rem;
text-align: center;
`;

const Info = styled.div`
max-width: 600px;
box-sizing: border-box;
padding: 0 2rem;
margin: auto  auto 2rem auto; 
font-size: 1.5rem;
line-height: 2rem;
text-align: left;
`;


function Contact() {


    return (
        <StyledContact>
            <ContactInnerWrapper>

                <ContactTitle>Contact</ContactTitle>
                <ContactSubTitle>ご連絡</ContactSubTitle>
                <ContactMethodWrapper>
                    <Info>
                        サービス内容や料金、お見積もりにつきましてもお気軽にお問合せくださいませ。
                        お問合せいただいた内容につきましては受付時間内（10：00～20：30）に順次ご返信いたします。
                    </Info>
                    <Table>
                        <TableTr>
                            <TableTd><Line>
                                <a href="https://lin.ee/3dDtfnS" target="_blank" rel="noreferrer noopener">
                                    <IconWrapper src={line}/>
                                </a>
                            </Line>
                                <Method>LINE</Method>
                            </TableTd>
                            <TableTd>LINEでのお問い合わせの場合、一部自動応答でご返信いたします。
                                簡単なご質問には自動でお答えすることができますので、ぜひご利用ください。
                                <a href="https://lin.ee/3dDtfnS" target="_blank" rel="noreferrer noopener"><ContactBtn
                                    color={"#01B920"}
                                    text={"友だち追加"}/></a>
                            </TableTd>
                        </TableTr>

                        <TableTr>
                            <TableTd>
                                <a href="mailto:hana.rbsr@gmail.com" title="hana.rbsr@gmail.com">
                                    <IconWrapper src={mail}/></a>

                                <Method>email</Method>
                            </TableTd>
                            <TableTd>フィルター設定により、メールが届かないこともございます。お急ぎのご依頼や、24時間以内に返信がない場合にはLINEやお電話でのお問合せをお願いいたします。
                                <a href="mailto:hana.rbsr@gmail.com" title="hana.rbsr@gmail.com"> <ContactBtn
                                    color={"#457279"} text={"hana.rbsr@gmail.com"}/></a>
                            </TableTd>
                        </TableTr>


                        <TableTr>
                            <TableTd><a href="tel:070-8433-6363" title="070-8433-6363"> <IconWrapper src={tel}/></a>
                                <Method>Tel</Method>
                            </TableTd>
                            <TableTd>接客中などで出られないこともございますので、その場合は営業時間内に折り返しいたします。
                                <a href="tel:070-8433-6363" title="070-8433-6363"> <ContactBtn color={"#9B9B9B"}
                                                                                               text={"070-8433-6363"}/></a>
                            </TableTd>
                        </TableTr>


                        <TableTr>
                            <TableTd>
                                <a href="https://www.instagram.com/rabbitsitter_hana/" title="Instagram"
                                   target="_blank" rel="noreferrer noopener">
                                    <IconWrapper src={instagram}/></a>
                                <Method>Instagram</Method>
                            </TableTd>
                            <TableTd>DMでもお問合せいただけます。うさぎ店長の日常もぜひご覧ください。
                                <a href="https://www.instagram.com/rabbitsitter_hana/" title="Instagram"
                                   target="_blank" rel="noreferrer noopener">
                                    <ContactBtn color={"#F0A0B0"} text={"インスタを見る"}/></a>
                            </TableTd>

                        </TableTr>
                    </Table>

                </ContactMethodWrapper>
            </ContactInnerWrapper>

        </StyledContact>

    );
}

export default Contact;
