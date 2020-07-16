import React from 'react';
import styled from 'styled-components';
import carrot from '../images/carrot.svg';
import toilet from '../images/toilet-paper.svg';
import sofa from '../images/sofa.svg';
import brush from '../images/brush.svg';
import air from '../images/air-transmission.svg';
import mail from '../images/message.svg';
import gra from '../images/gra.png';
import logo from '../images/logo_w_row.svg';

const StyledAbout = styled.section`
width: 100%;
height: auto;
box-sizing: border-box;
display: flex;
justify-content: center;
transition: all 0.5s ease;
padding: 0rem 1rem 0rem 1rem;
overflow: hidden;
`;

const AboutInnerWrapper = styled.div`
box-sizing: border-box;
width: auto;
padding: 4rem;
@media screen and (max-width: 550px){
padding: 4rem 2rem 2rem 2rem;
}
`;

const Grid = styled.div`
  display: grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows: auto;
    max-width: 750px;
    grid-gap:2rem;
    margin: auto;
color: #565656;
@media screen and (max-width: 768px){
grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 550px){
grid-template-columns: 1fr;
}
`;

const GridItem = styled.div`
max-height: 400px;
border-radius: 8px;
overflow: hidden;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
position: relative;
background-color: white;
transition: all 0.5s ease;
color: #565656;
&.span-col2{
grid-column: span 2 / auto;
@media screen and (max-width: 550px){
grid-column: span 1 / auto;
}
}
&.last{
background-image: url(${gra});
    background-size: cover;

color: white;
@media screen and (max-width: 768px){
grid-column: span 2 / auto;
}
@media screen and (max-width: 550px){
grid-column: span 1 / auto;
}
}

&:hover{
top:-2px;
box-shadow: 0 2px 5px rgba(0,0,0,0.3);
background-color: #dcdcdc;
}
`;


const GridItemCnt = styled.div`
position: absolute;
font-size: 2.5rem;
padding: 8px;
text-align: center;
color: white;
top:0;
left: 0;
`;


const TitleWrapper = styled.span`
width: 100%;
height: 100%;
font-size: 2.5rem;
line-height: 4rem;
text-align: center;
box-sizing: border-box;
display: flex;
justify-content: center;
flex-direction: column;
padding: 2rem;
color: white;
background-image: url(${gra});
background-size: cover;
    &:before{
    margin-top: 1rem;
    content: url(${logo});
    filter: drop-shadow(0px 0px 5px #ffe589);
    }
@media screen and (max-width: 550px){
font-size: 1.8rem;
padding: 2rem 0;
}
`;

const GridImage = styled.div`
height: 150px;
width: auto;
overflow: hidden;
`;
const Image = styled.img`
display: block;
margin: auto;
box-sizing: border-box;
padding: 10%;
width:auto; 
height:100%;
@media screen and (max-width: 550px){
padding: 5%;
}
`;


const GridItemTitle = styled.div`
height: 15%;
width: 100%;
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
font-size: 2rem;
margin-top: 1rem;
&.last{
height: 40%;
padding: 2rem 0; 
}

`;

const GridItemText = styled.div`
font-family: 'Kosugi Maru', sans-serif;
padding: 1rem 3rem 3rem 3rem;
font-size: 1.6rem;
line-height: 2.2rem;
`;

const Test = styled.div`
width: 100%;
height: auto;
margin: 0;
padding: 0;
`;

function About() {
    return (
        <StyledAbout>
            <AboutInnerWrapper>
                <Grid className="grid">
                    <GridItem className="span-col2">
                        <TitleWrapper>
                            ひとりといっぴきに合わせた内容で<br/>お世話します。

                        </TitleWrapper>


                    </GridItem>
                    <GridItem><GridItemCnt>1</GridItemCnt><GridImage><Image src={carrot}/></GridImage>
                        <GridItemTitle>ごはん</GridItemTitle><GridItemText>ペレット、牧草、おやつ等をご用意いたします。</GridItemText></GridItem>

                    <GridItem><GridItemCnt>2</GridItemCnt><GridImage><Image src={toilet}/></GridImage>
                        <GridItemTitle>トイレ</GridItemTitle><GridItemText>お掃除、シーツ交換等。きれいな状態にお掃除します。
                            ご希望があれば、うさぎさんの健康バロメーターであるうんちのお写真もお送りいたします。</GridItemText></GridItem>

                    <GridItem><GridItemCnt>3</GridItemCnt><GridImage><Image src={sofa}/></GridImage>
                        <GridItemTitle>へやんぽ</GridItemTitle><GridItemText>室内、サークル内等。うさぎさんにいつものようにへやんぽを満喫していただきます。※お外でのうさんぽはうさぎさんの安全を考慮し、ご遠慮いただいております。</GridItemText></GridItem>


                    <GridItem><GridItemCnt>4</GridItemCnt><GridImage><Image src={brush}/></GridImage>
                        <GridItemTitle>ブラッシング</GridItemTitle><GridItemText>換毛期のうさぎさんの抜け毛はすさまじいです。うさぎさんのご様子をうかがいながら、可能な範囲でブラッシングいたします。</GridItemText></GridItem>

                    <GridItem><GridItemCnt>5</GridItemCnt><GridImage><Image src={air}/></GridImage>
                        <GridItemTitle>空調管理</GridItemTitle><GridItemText>うさぎさんが過ごしやすいようエアコンや暖房の調節をいたします。</GridItemText></GridItem>

                    <GridItem><GridItemCnt>6</GridItemCnt><GridImage><Image src={mail}/></GridImage>
                        <GridItemTitle>お世話内容報告</GridItemTitle><GridItemText>メールやLINEなどでお世話内容とうさぎさんのご様子をご報告いたします。
                            ご希望の枚数でお写真もお送りいたします。</GridItemText></GridItem>

                    <GridItem>
                        <GridItemCnt>店長</GridItemCnt>
                        <GridImage>

                            <Test>
                                <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/qjuxh7c2rSs?mute=1&loop=1&playlist=qjuxh7c2rSs&autoplay=1&disablekb=1&controls=0&amp;start=1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </Test></GridImage>
                        <GridItemTitle>補償体制</GridItemTitle><GridItemText>細心の注意を払ってお世話いたしますが、万が一の事故に備え損害保険に加入しています。</GridItemText></GridItem>


                </Grid>

            </AboutInnerWrapper>

        </StyledAbout>

    );
}

export default About;
