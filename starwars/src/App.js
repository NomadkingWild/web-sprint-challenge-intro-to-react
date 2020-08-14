import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import Character from './components/Character'
import Details from './components/Details'
import './App.css';

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
  axios.get(`${BASE_URL}/characters?api_key=${API_KEY}`)
  .then(res=>{
    setCharacter(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
  
}, [])
  return (
    <div className="App">
      <h1 className="Header">Character</h1>
      {
        character.map((fr, idx)=>{
          return <Character big={idx % 2 === 0} key={fr.id}info={fr} action={openDetails} actionText='see details' />
        
      })
    }
      {
        currentCharacter && <Character characterId={currentCharacter} close={closeDetails} />
      }
      </div>

  );
}


