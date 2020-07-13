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
 } 
`;


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
                                “ウサギさんと飼い主さんの生活をより良いものにしたい”
                                という思いから生まれました。</Text2>
                        </Fade>
                    </ProfileText>

                </ProfileWrapper>

                <AboutStoryWrapper>
                    <StoryTextBox className="big">
                        私が初めてうさぎを家族に迎えたのは小学生の頃。
                        いまからおよそ25年前。
                        それからは猫と犬を家族に迎え、いまはまたうさぎと暮らしています。
                    </StoryTextBox>

                    <StoryTextBox>

                        改めてうさぎと暮らすことになるまでに20年ほど月日がたっていました。
                        わたしはこの20年もの間に、うさぎにまつわる常識が大きく変わっていたことにとても驚
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
                        はじめに飼っていたうさぎさんも3才で亡くなってしまったのですが、当時のわたしは、そ
                        のこの死んでしまった原因さえも知りませんでした。
                    </StoryTextBox>
                    <StoryTextBox>
                        その後ハナとの生活がはじまり、しばらく経ってペットシッターになろうと決意したときに、
                    </StoryTextBox>
                    <StoryTextBox>
                        わたしと同じようにうさぎさんの知識が昔のまま止まっている人もいるかもしれない。
                    </StoryTextBox>
                    <StoryTextBox>
                        うさぎさんを飼っている人は犬猫より少ないし情報も比べると少ないし、きっと飼育に悩
                        んでいる人もいるはず。
                    </StoryTextBox>
                    <StoryTextBox>
                        うさぎさんと飼い主さんがより幸せな生活が出来るように、手助けをしたい 。
                    </StoryTextBox>
                    <StoryTextBox>
                        そのためにうさぎの知識と魅力を広めていきたい。
                    </StoryTextBox>
                    <StoryTextBox>
                        そんな想いがあり『うさぎ専門』として開業することを決意しました。
                    </StoryTextBox>

                </AboutStoryWrapper>

            </AboutInnerWrapper>

        </StyledAbout>

    );
}

export default About;
