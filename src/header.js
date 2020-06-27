import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const StyledHeader = styled.header`
        background-color: white;
        height: 191px;
        text-align: center;
        font-size: 18px;
        justify-content: center;
        content: "x";
        display: block;
        width: 100%;
        //TODO　固定するか決める
        position: fixed;
        z-index: 999;
            &:after {
                content: "";
                display: block;
                position: absolute;
                z-index: 999;
                left: 0;
                margin-top: -2px !important;
                margin-left: -2vw !important;
                height: 70px;
                width: 102vw;
                background: white;
                clip-path: polygon(0% 0%,100% 100%,100% 0%,100% 0%) !important;
                }`;

const StyledNav = styled.div`
        display:table-cell;
        vertical-align: middle;
        background-color: white;
        list-style : none;
        justify-content: space-around;
        width: 100%;
        height: 191px;`;

const NavList = styled.li`
    display: inline;
    vertical-align: middle;
    padding: 10px;
    color: #7F7F7F;
    font-size: 15px;
    cursor:pointer;
          &:hover {
           color: #FF8F8F; }`;

const NavWrapper = styled.div`
      display: table;
       margin-left: auto;
       margin-right: auto;     
`;

const LogoWrapper = styled.img`
  height: 122px;
  width: auto;
  padding: 0 2.5em;
      
`;


function Header() {
    return (
        <>
            <StyledHeader>
                <NavWrapper className="Nav">
                    <StyledNav>
                        <NavList>ABOUT</NavList>
                        <NavList>SERVICE</NavList>
                        <NavList><LogoWrapper src={logo} className="HanaLogo" alt="logo"/></NavList>
                        <NavList>PRICE</NavList>
                        <NavList>CONTACT</NavList>
                    </StyledNav>
                </NavWrapper>
            </StyledHeader>


        </>
    );
}

export default Header;
