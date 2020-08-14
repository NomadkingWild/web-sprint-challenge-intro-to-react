// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
width: 80%;
display:flex;
justify-content:space-evenly;
color: ${props => props.color || props.theme.primaryColor};
margin: ${props =>props.theme.margin.small};
font-size: ${props=props.big ? '1rem':'0.5rem'};
@media (max-width: ${props=>props.theme.tabletBreakpoint}){
    width:100%100%;
}
button {
background-color:${props => props.theme.secondaryColor};
color: ${props=>{
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
export default function Character({big, info, action, actionText}){
    return(
        <StyledCharacter big={big}>
            {info.name}
            <button onClick={()=> action(info.id)}>
                {actionText}
            </button>
        </StyledCharacter>
    )
}