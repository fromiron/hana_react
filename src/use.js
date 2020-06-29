import React from 'react';
import styled, {keyframes} from 'styled-components';
import Pulse from 'react-reveal/Pulse';

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

const StyledUse = styled.div`
padding-top: 35px;
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
color: #565656;
`;


const UseInnerWrapper = styled.section`
width: 100%;
max-width: 980px;
height: 600px;
background-color: #F8F8F8;
position: relative;
text-align: center;
`;

const TextSize1 = styled.div`
font-size: 2rem;
padding: 1rem;
`;

const TextSize2 = styled.div`
font-size: 9.5rem;
padding: 2rem;
@media (max-width: 768px) {
        font-size: 5rem;
        padding: 1rem;
    }
`;


const TextSize3 = styled.div`
font-size: 5.5rem;
padding: 2rem;
color: #969696;
position: absolute;
left: -6rem;
top: 16rem;
display: table;
@media (max-width: 768px) {
        top: 11rem;
        font-size: 3rem;
        padding: 1rem;
    }
    &:after{
    display: table-cell;
    vertical-align: middle;
      content: " その後";
    font-size: 3rem;
  animation: ${bounce} 2s infinite;
  color: #FF9831;
    }
`;


const TextSize4 = styled.div`
position: absolute;
font-size: 6.5rem;
right: 0;
top: 26rem;

@media (max-width: 768px) {
        top: 16rem;
        font-size: 3.5rem;
        padding: 1rem;
    }
`;

const TextSize5 = styled.div`
position: absolute;
top: 52rem;
font-size: 4rem;
padding: 1rem;
width: 100%;
@media (max-width: 768px) {
        top: 38rem;   
    }
`;

const TextSize6 = styled.div`
 position: absolute;
 font-size: 1.5rem;
 width: 100%;
 text-align: center;
 top:40em;
margin-bottom: 2em;
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


function Use() {
    return (
        <StyledUse>
            <Pulse>
                <UseInnerWrapper>
                    <TextSize1>サービスの</TextSize1>
                    <TextSize2>ご利用の流れ</TextSize2>
                    <TextSize3>お問合わせ &nbsp;</TextSize3>
                    <TextSize4>事前打ち合わせ</TextSize4>
                    <ArrowIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58.021" height="101.428"
                             viewBox="0 0 58.021 101.428">
                            <path
                                d="M54.915-45.029q0,4.658-6.987,4.658-.932,0-7.686-.492t-12.707-.492q-7.4,0-13.742.6t-5.409.6q-3.623,0-3.623-3.83,0-4.089,5.9-5.383,4.606-.983,18.167-.983,15.579,0,19.823.673Q54.915-48.7,54.915-45.029ZM51.706-21.945q0,4.037-5.072,4.037-1.035,0-10.947-1.863A100.979,100.979,0,0,0,17.08-21.635q-.932,0-2.717.052t-2.614.052q-6,0-6-4.451,0-4.555,7.4-4.555A159.16,159.16,0,0,1,43.787-27.9Q51.706-26.293,51.706-21.945Zm54.484-15.6q0,5.594-12.525,16.782A97.246,97.246,0,0,1,77.1-8.543Q70.373-4.762,67.061-4.762a3.806,3.806,0,0,1-2.924-1.346A4.493,4.493,0,0,1,62.92-9.213q0-2.226,2.588-3.934,3.416-1.97,6.78-3.939,12.06-7.058,22.877-20.465a81.009,81.009,0,0,0-16.045-9.7q-6.47-2.723-12.888-5.494-4.555-2.277-4.555-5.383a4.483,4.483,0,0,1,1.372-3.287,4.605,4.605,0,0,1,3.39-1.372,8.039,8.039,0,0,1,2.536.518,114.1,114.1,0,0,1,29.45,15.077Q106.19-41.591,106.19-37.55Z"
                                transform="translate(-4.762 -4.762) rotate(90)"/>
                        </svg>


                    </ArrowIcon>

                    <TextSize5>シッターサービス利用</TextSize5>
                    <TextSize6>
                        <p>I AM ALWAYS OPEN TO NEW COLLABORATIONS WITH BRANDS</p>
                        <p>MODELS AND CREATIVES YOU KNOW WHAT DO DO - JUST</p>
                    </TextSize6>

                </UseInnerWrapper>
            </Pulse>

        </StyledUse>


    );
}

export default Use;
