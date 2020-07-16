import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Profile from '../images/about_hana.png';

const StyledAbout = styled.section`
padding-top: 10px;
width: 100%;
height: auto;
box-sizing: border-box;
display: flex;
justify-content: center;
transition: all 0.5s ease;
background: #565656;
`;

const AboutInnerWrapper = styled.div`
width: 100%;
overflow: hidden;
`;


const ProfileWrapper = styled.div`
display:block;
margin: 5rem auto;
 max-width: 400px;
 height: auto;
 text-align: center;
 padding: 0 1rem;
`;

const ProfileImage = styled.div`
 display: inline-block;
 background-image: url(${Profile});
 background-position: center;
 background-repeat: no-repeat;
 background-size: contain;
 width: 300px;
 height: 300px;
`;

const ProfileText = styled.div`
 color:white;
 text-align: left;
`;

const Text1 = styled.span`
font-size: 3rem;
 line-height: 2em;
`;
const Text2 = styled.span`
font-size: 1.6rem;
 line-height: 1.5em;
`;

const AboutStoryWrapper = styled.div`

background-color: white;
display:block;
margin: 0 auto;
padding: 5rem 0;
 width: 100%;
 height: min-content;
 text-align: left;
`;

const StoryTextBox = styled.div`
display: block;
margin: 0 auto;
 min-width: 300px;
 max-width: 700px;
padding:1rem 4rem;
font-size: 2rem;
line-height: 2.5rem;
color: #565656;
border-bottom: 4px #f3f3f3 dotted;
&.big:first-letter
 { font-size: 3rem; }
&:last-child
 { border-bottom: none;
 } `;


function About() {
    return (
        <StyledAbout>
            <AboutInnerWrapper>
                <ProfileWrapper>
                    <ProfileImage/>
                    <ProfileText>
                        <Fade>
                            <Text1>Rabbit sitter HANA<br/></Text1>

                            <Text2>
                                ラビットシッターハナは、
                                “うさぎさんと飼い主さんの生活をより良いものにしたい”
                                という想いから生まれました。</Text2>
                        </Fade>
                    </ProfileText>

                </ProfileWrapper>

                <AboutStoryWrapper>
                    <StoryTextBox className="big">
                        私が初めてうさぎを家族に迎えたのは小学生の頃。
                        およそ25年前。それからは猫と犬を家族に迎え、今はまたうさぎと暮らしています。
                    </StoryTextBox>

                    <StoryTextBox>
                        改めてうさぎと暮らすことになるまでに20年ほど月日が経っていました。
                        その間に、うさぎにまつわる常識が大きく変わっていたことにとても驚
                        きました。
                    </StoryTextBox>
                    <StoryTextBox>
                        まずは主食が牧草（チモシーなど）であること。
                        当時はペレットが主食であると考えており、ショップでもうさぎさんの牧草を見かけたこ
                        とはありませんでした。
                    </StoryTextBox>
                    <StoryTextBox>
                        そしてかじり木について。
                        当時はうさぎさんの伸び続ける歯を削るものといえばかじり木でした。
                        実はかじり木ではなく、固い1番刈りの牧草を主食とし、前歯で噛み切って奥歯ですり
                        つぶすという行為を繰り返すことで歯を削ることができるのです。
                    </StoryTextBox>
                    <StoryTextBox>
                        最後に、子宮の病気。
                        メスのうさぎさんの70％が3年ほどで子宮の病気になって死んでしまいます。
                        うさぎの避妊手術が一般的ではなかったので、
                        はじめに飼っていたうさぎさんも3才で亡くなってしまいました。
                    </StoryTextBox>
                    <StoryTextBox>
                        その後、再び出会ったうさぎさんであるハナとの生活がはじまり、ペットシッターになるきっかけになりました。
                    </StoryTextBox>
                    <StoryTextBox>
                        うさぎさんと生活している人は犬猫より少なく、情報も少ない。
                        きっとお世話に悩むこともあるはず。
                    </StoryTextBox>
                    <StoryTextBox>
                        うさぎさんと飼い主さんがより幸せな生活が出来るように、手助けをしたい 。
                        <br/>
                        そのためにうさぎの情報や魅力を広めていきたい。
                    </StoryTextBox>
                    <StoryTextBox>
                        そんな想いがあり『うさぎ向け』として開業することを決意しました。
                    </StoryTextBox>

                </AboutStoryWrapper>

            </AboutInnerWrapper>

        </StyledAbout>

    );
}

export default About;
