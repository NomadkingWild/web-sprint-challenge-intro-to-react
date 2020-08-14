import React, {useState, useEffect} from 'react'
import {BASE_URL} from '../constants'
import axios from 'axios'
import styled,{keyframes} from 'styled-components'

const kf = keyframes`
100%{
    opacity:1;
}
`
const StyledDetails= styled.div`
opacity:0;
animation: ${kf} .5s ease-in-out forwards;
h2{
    font-size: 1.6rem;
    background: ${ ()=>{
        let hex = ()=>Math.floor(Math.random()*255).toString(16);
        console.log(hex());
        return '#'+hex()+hex()+hex()
    }};
}
`
export default function Details(props){
    const {CharacterId, close} = props;
    const [details, setDetails]= useState(null)

    useEffect(()=>{
        axios.get(`${BASE_URL}/Character/${CharacterId}`)
        .then(res=>{
            setDetails(res.data) })
            console.log()
            .catch(err=>{
                console.log(err)
            },[1]);
    })
 return(
     <StyledDetails color="gold"
     className='container'>
         <h2>Details:</h2>
         {
             details && <>
             <p>{details.name} is {details.age}
             </p>
             {details.name}Has a list of episodes:
             <ul>
                 {
                 details.episode.map((episode) => <li
                 key={episode}></li>)
                 }
             </ul>
             </>
         }
         <button onClick ={close}>Close</button>
     </StyledDetails>
 )
 }