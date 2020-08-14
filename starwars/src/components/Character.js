// Write your Character component here
import {BASE_URL} from '../constants'
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import theme from '../theme'
import styled from 'styled-components'

const StyledCharacter = styled.div`
width: 80%;
display:flex;
flex-direction: column;
justify-content:space-evenly;
color: ${props => props.color || props.theme.primaryColor};
margin: ${props =>props.theme.margins.small};
font-size: ${props => props.big ? '1rem':'0.5rem'};
@media (max-width: ${props=> props.theme.tabletBreakpoint}){
    width:100%100%;
}

button {
background-color:${props => props.theme.secondaryColor};
color: ${props => {
    const {theme} = props;
    return theme.white;
}};
    transition: all 0.5s ease-in-out;
&:hover{
    transition: all 0.5s ease-in-out;
    transform: scale()(2.0);
    }
}
`
export default function Character({info}){
console.log("test1",info)
    return(
        <StyledCharacter big={theme}>
            <h1>{info.name}</h1>
            <h2>Id number: {info.id}</h2>
            <h3>Species: {info.species}</h3>
            <p> Status: {info.status}</p>
            <p className = "epi">is in the following episodes: {info.episode}</p>
        </StyledCharacter>
    )
}
