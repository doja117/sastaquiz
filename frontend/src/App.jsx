import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
async function getQuestion(){
  await axios.get('http://localhost:3000/question').then((r)=>{
    return r;
  })
}
function App() {
  const [firstElement,setFirstElement]=React.useState(0);
  const [secondElement,setSecondElement]=React.useState(0);
  const [symbol,setSymbol]=React.useState("");
  const [result,setResult]=React.useState(0);
  getQuestion().then(()=>{
    setFirstElement(r.firstElement)
    setSecondElement(r.secondElement)
    setSymbol(r.symbol)
    setResult(r.symbol)
  });
  const [myResult,setMyResult]=useState(0)
  return (
    <>
    qweoqwpo
      ${firstElement} ${symbol} ${secondElement}  
      <input placeholder='Result' onChange={(e)=>{
        setMyResult(e.target.value)
      }}></input>
      <button onClick={()=>{
        if (myResult==result) alert('Good')
        else alert("retry")
      }}></button>
    </>
  )
}

export default App
