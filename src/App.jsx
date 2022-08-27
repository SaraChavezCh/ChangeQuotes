import React from 'react'
import { useState } from 'react'
import './App.css'
import QuoteBox from './Componentes/QuoteBox'
import quotes from './quotes.json'
import Button from'./Componentes/Button'


const colors = [
  '#0EED5C', '#0EED5C','#00CF88','#00AE9E','#008B9B','#006881','#2F4858','#0EED5C','#00DA98','#00C2CC','#00A6F0', '#0087F8', '#0062E1',     ]


function App() {
const bgColorIndex = Math.floor(Math.random() * colors.length)
document.body.style = `background:${colors[bgColorIndex]}`
const bg= colors[bgColorIndex]

const indexRandome = Math.floor(Math.random() * quotes.length)
const [index, setIndex] = useState (indexRandome)
  
const changeIndex = () => {
      const randomeIndex = Math.floor(Math.random() * quotes.length)
      setIndex (randomeIndex)
    }

  const RandomeQuote = quotes[index].quote
  const RandomeAuthor = quotes[index].author
  
  return (
    <div className="App" style={{color:colors[bgColorIndex]}}>
      <QuoteBox
       Quote={RandomeQuote}
       Author={RandomeAuthor}/>
      <Button change={changeIndex} bg={bg}/>
    </div>
  )
}

export default App
