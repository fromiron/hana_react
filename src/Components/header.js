import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg'
import SmallLogo from '../images/small_logo.svg'
import useWindowSize from "./windowSize";
import {Link} from 'react-router-dom';

const StyledHeader = styled.header`
        background-color: white;
        height: auto;
        text-align: center;
        font-size: 18px;
        justify-content: center;
        width: 100%;
        position: fixed;
        transition: all 0.5s ease;
        z-index: 999;
        box-shadow: 0 0 40px rgba(196,196,196,0.7);
            &:after {
                content: "";
                display: block;
                position: absolute;
                z-index: 990;
                left: 0;
                margin-top: -2px !important;
                margin-left: -2vw !important;
                height: 50px;
                width: 102vw;
                clip-path: polygon(0% 0%,100% 100%,100% 0%,100% 0%) !important;
                background-color: white;
                  @media (max-width: 550px) {
                  height: 28px;
                  display: none
                    }
               
                }`;


const StyledNav = styled.div`
        vertical-align: middle;
        list-style : none;
        justify-content: space-around;
        width: 100%;
        height: 191px;
        transition: all 0.5s ease;
         @media (max-width: 768px) {
            height: 100px;
            display: flex;
            flex-direction: column;
            }

`;


const NavElement = styled.div`
    display: inline;
    vertical-align: middle;
    padding: 10px;
    color: #7F7F7F;
    font-size: 15px;
    transition: all 0.5s ease;
   
      @media (max-width: 550px) {
        font-size: 13px; }`;

const NavElementSpan = styled.span`
    position: relative;
    width: 100%;
    &::before{
       content: '';
       border-radius:3.5px;
        background-color: white;
        position: absolute;
        margin-right: 5em;
        left: -100%;
        width: inherit;
          height: 7px;
        bottom: -0.5rem;
        transition: all 0.4s;
        z-index: -10;
        opacity: 0;}
        

&:active::before,
&:focus::before,
&:hover::before{
   background-color: #FF6082;
   left: 0;
   opacity: 0.5;
  }`;


const NavBtn = styled.div`
display: flex;
position: relative;
top:-50px;     
  @media (max-width: 768px) {
        position: absolute;
        top:20px;
        right:0;
        padding: 1.5em;        
}       
 @media (max-width: 550px) {
        position: absolute;
        right:0;
        padding: 1.5em;        
            top:45px;
            z-index: 999;}
             @media (max-width: 350px) {
        
        padding: 1.5em 0.5em;        
           
            }
`;


const NavWrapper = styled.div`
      display: table;
       margin-left: auto;
       margin-right: auto;  
 @media (max-width: 768px) {
  display:block;
 }
`;

const LogoWrapper = styled.img`
  height: 122px;
  width: auto;
  padding: 2.5em 0 0 0;
  transition: all 0.5s ease;

@media (max-width: 768px) {
  height: 50px;
  left: 0;
   position: absolute;
   padding: 2.5em;
      top:-15px;
    
 }
  @media (max-width: 550px) {
  height: 40px;
   padding: 2em;     
} 
`;
const BlankBox = styled.div`
width: 350px;
height: auto;
@media (max-width: 768px) {
  display: none;
}
`;


const NavHeightFixer = styled.div`
width: 100%;
height:191px;
@media (max-width: 768px) {
height:100px;
 }
`;


const Arrow = styled.div`
position: fixed;
bottom: 1rem;
right: 1rem;
background-color: #565656;
width:  3rem;
height: 3rem;
z-index: 1000;
border-radius: 50%;
color: white;
font-size: 1.7rem;
overflow: hidden;
text-align: center;
line-height: 3rem;
box-shadow: 0 -2px 5px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.1);
cursor: pointer;
transition: all 0.2s ease;
    &:hover{
    width:  4rem;
    height: 4rem;
    line-height: 4rem;
    background-color: #FF6082;
}`;


function Header() {
    let windowSize = useWindowSize();
    let width = windowSize.width;

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };


    return (
        <div>
            <StyledHeader>
                <NavWrapper className="Nav">
                    <StyledNav>
                        <Link to="/">{width > 768 ? <LogoWrapper src={Logo} className="HanaLogo" alt="logo"/> :
                            <LogoWrapper src={SmallLogo} className="HanaLogo" alt="logo"/>}</Link>


                        <NavBtn>

                            <Link to="/about"><NavElement><NavElementSpan>ABOUT</NavElementSpan></NavElement></Link>
                            <Link to="/service"><NavElement><NavElementSpan>SERVICE</NavElementSpan></NavElement></Link>

                            <BlankBox/>

                            <Link to="/price"> <NavElement><NavElementSpan>PRICE</NavElementSpan></NavElement></Link>
                            <Link to="/contact"><NavElement><NavElementSpan>CONTACT</NavElementSpan></NavElement></Link>

                        </NavBtn>

                    </StyledNav>
                </NavWrapper>
            </StyledHeader>
            <Arrow onClick={scrollTop}>Top</Arrow>
            <NavHeightFixer/>

        </div>
    );
}

export default Header;
