import React from "react";
import styled from 'styled-components';

const HeaderDiv = styled.div`
    box-sizing: border-box;
    padding: 50px 5%;
    background: teal;
    margin: 0;
`

export default function Header() {
    return (
        <HeaderDiv>
            <h1>NASA Image of the Day</h1>
        </HeaderDiv>
    );
}