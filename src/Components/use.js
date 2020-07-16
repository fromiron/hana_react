import React from 'react';
import styled, {keyframes} from 'styled-components';
import Pulse from 'react-reveal/Pulse';
import Popup from 'sweetalert';
import SmallLogo from '../images/small_logo.svg'

const bounce = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: scale(1)
  }
`;

const StyledUse = styled.section`
padding-top: 35px;
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
color: #565656;
`;


const UseInnerWrapper = styled.div`
width: 100%;
max-width: 980px;
height: 750px;
position: relative;
text-align: center;
transition: all 0.5s ease;

@media (max-width: 768px) {
     height: 650px;
    }
`;

const TextSize1 = styled.div`
font-size: 2rem;
padding: 1rem;
`;

const TextSize2 = styled.div`
font-size: 9.5rem;
padding: 2rem;
transition: all 0.5s ease;

@media (max-width: 768px) {
        font-size: 5rem;
        padding: 1rem;
    }
    
    @media (max-width: 550px) {
        font-size: 4rem;
`;


const TextSize3 = styled.div`
font-size: 3.5rem;
padding: 2rem;
color: #969696;
position: absolute;
left: -1rem;
top: 16rem;
display: table;
transition: all 0.5s ease;
    &::before{
  content: "1";
  font-size: 1.5rem;
  font-family: "Calibri",sans-serif;
  padding: 0.2rem;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  left: -2rem;
  border-radius: 50%;
  background-color: #cecece;
  color: white;
  }
    &:after{
   content: "お問合せ";
    display: table-cell;
    vertical-align: middle;
     padding-right: 3px;
   font-weight: 900;
    font-size: 5.5rem;
  animation: ${bounce} 2s infinite;
  color: #FF9831;

  
    }
@media (max-width: 768px) {
        top: 11rem;
        font-size: 2rem;
        padding: 1rem;
          left: -2rem;
           &:after{
            font-size: 3rem;
                       }
               }
   `;


const TextSize4 = styled.div`
position: absolute;
font-size: 6.5rem;
right: 0;
top: 26rem;
 &::before{
  content: "2";
  font-size: 1.5rem;
  font-family: Calibri,sans-serif;
  padding: 0.2rem;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  left: -2rem;
  border-radius: 50%;
  background-color: #cecece;
  color: white;
  }
@media (max-width: 768px) {
        top: 16rem;
        font-size: 3.5rem;
        padding: 1rem;
    }
`;

const TextSize5 = styled.div`
position: absolute;
top: 52rem;
font-size: 5rem;
padding: 1rem;
text-align: center;
left: 50%;
width: max-content;
transform: translateX(-50%);
@media (max-width: 768px) {
        top: 38rem;   
}

    
&::before{
  content: "3";
  font-size: 1.5rem;
  font-family: "Calibri",sans-serif;
  padding: 0.2rem;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  left: -2rem;
  border-radius: 50%;
  background-color: #cecece;
  color: white;
  }
    
`;

const TextSize6 = styled.div`
 position: absolute;
 font-size: 1.5rem;
 width: 100%;
 text-align: center;
 top:40em;
 color:#cecece;
@media (max-width: 768px) {
        top: 50rem;   
    }
    

    
`;

const ArrowIcon = styled.div`
position: absolute;
top: 38em;
width: 100%;
fill: #FF9831;
animation: ${bounce} 2s infinite;
@media (max-width: 768px) {
        top: 25rem;   
    }
`;

const PinkBtn = styled.button`
position: absolute;
bottom: 3em;
width: 150px;
height: 48px;
background-color:#FF6082;
color: white;
transform: translateX(-50%);
transition: all 1s ease;
cursor: pointer;
&:hover{
background-color: #565656;
}
@media (max-width: 768px) {
     bottom: 2.5em;
}
`


function Use() {
    const PopupEvent = (e) => {
        Popup("よくある質問", {
            Title: SmallLogo,
            buttons: {
                time: "営業時間は何時からですか？",
                pay: "支払方法を教えてください。",
                key: "鍵の預け方法はどうなりますか？",
                onSitting: "ペットの様子を教えてもらえますか？",
                cancel: "Close",
                defeat: false,
            },
        }).then((value) => {
            // eslint-disable-next-line
            switch (value) {
                case "time":
                    Popup("お問合せ受付時間は10：00～20：30です。 シッター訪問時間は7：00～21：00となっております。ご希望によっては時間外も対応可能です。");
                    break;
                case "pay":
                    Popup("現金でのお支払いをお願いしております。PayPayやLINE Payもご利用いただけるよう只今準備中です。");
                    break;
                case "key":
                    Popup("基本的には事前打ち合わせ時にお預かりしております。返却方法は、直接手渡し、ポスト、レターパック等ご希望に合わせて対応いたします。");
                    break;
                case "onSitting":
                    Popup("LINEやメール等ご希望の方法で、お世話内容・ペットのご様子をお写真付きでご報告いたします。報告内容もパーソナルにご対応いたしますので、写真の枚数や必要事項などにご希望がございましたらお知らせください。");
                    break;

            }
        })
    }

    return (
        <StyledUse>
            <Pulse>
                <UseInnerWrapper>
                    <TextSize1>サービス</TextSize1>
                    <TextSize2>ご利用の流れ</TextSize2>
                    <TextSize3>まずは &nbsp;</TextSize3>
                    <TextSize4>事前打ち合せ</TextSize4>
                    <ArrowIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58.021" height="101.428"
                             viewBox="0 0 58.021 101.428">
                            <path
                                d="M54.915-45.029q0,4.658-6.987,4.658-.932,0-7.686-.492t-12.707-.492q-7.4,0-13.742.6t-5.409.6q-3.623,0-3.623-3.83,0-4.089,5.9-5.383,4.606-.983,18.167-.983,15.579,0,19.823.673Q54.915-48.7,54.915-45.029ZM51.706-21.945q0,4.037-5.072,4.037-1.035,0-10.947-1.863A100.979,100.979,0,0,0,17.08-21.635q-.932,0-2.717.052t-2.614.052q-6,0-6-4.451,0-4.555,7.4-4.555A159.16,159.16,0,0,1,43.787-27.9Q51.706-26.293,51.706-21.945Zm54.484-15.6q0,5.594-12.525,16.782A97.246,97.246,0,0,1,77.1-8.543Q70.373-4.762,67.061-4.762a3.806,3.806,0,0,1-2.924-1.346A4.493,4.493,0,0,1,62.92-9.213q0-2.226,2.588-3.934,3.416-1.97,6.78-3.939,12.06-7.058,22.877-20.465a81.009,81.009,0,0,0-16.045-9.7q-6.47-2.723-12.888-5.494-4.555-2.277-4.555-5.383a4.483,4.483,0,0,1,1.372-3.287,4.605,4.605,0,0,1,3.39-1.372,8.039,8.039,0,0,1,2.536.518,114.1,114.1,0,0,1,29.45,15.077Q106.19-41.591,106.19-37.55Z"
                                transform="translate(-4.762 -4.762) rotate(90)"/>
                        </svg>


                    </ArrowIcon>

                    <TextSize5>お世話当日</TextSize5>

                    <TextSize6>
                        うさぎさんがなるべく普段通りの生活ができるようお世話いたします。<br/>
                        その後、メールやLINEなどでお世話内容をご報告いたします。
                    </TextSize6>

                    <PinkBtn onClick={PopupEvent}>よくある質問</PinkBtn>
                </UseInnerWrapper>
            </Pulse>

        </StyledUse>


    );
}

export default Use;
