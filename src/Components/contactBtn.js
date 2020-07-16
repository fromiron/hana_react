import React from 'react';
import styled from "styled-components";


function ContactBtn({color, text}) {
    const ContactBtn = styled.button`
        width: 100%;
        height: 3rem;
        background-color:${color};
        color: white;
        border-radius: 4px;
        transition: all 1s ease;
        cursor: pointer;
            &:hover{
            background-color: #565656;
            
            }
        `;
    return <>
        <ContactBtn>{text}</ContactBtn>
    </>
}

export default ContactBtn;