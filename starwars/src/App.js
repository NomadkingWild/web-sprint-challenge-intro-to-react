import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import Character from './components/Character'
import Details from './components/Details'
import './App.css';
import Image from './images/rm-bg.jpg'


export default function App () {
  const[character, setCharacter]= useState([]);
  const[currentCharacter, setCurrentCharacter]= useState('1')
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const openDetails = id =>{
  setCurrentCharacter(id);
}
const closeDetails= () =>{
  setCurrentCharacter(null)
}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(()=>{
  axios.get(`${BASE_URL}/character/`)
  .then(res =>{
    console.log(res)
    setCharacter(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
  .finally(()=>{

  })
  
}, [])
useEffect(()=>{
  console.log("test", character)
},[character])

  return (
  
    <div className="App">
      <h1 className="Header">Characters</h1>
        <div>
        <Character />
        <Details />
      </div>
      </div>
      
  );
}


