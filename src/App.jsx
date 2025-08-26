import { useEffect, useRef, useState } from 'react'

function App() {
  const [color, setColor] = useState('#242424')
  
  function handleClick() {
    console.log('clicked')
    setColor('#1a130fff')
  }

  return (
    <div className='main' onClick={handleClick} style={{ backgroundColor: color }}>
      aaaaa
    </div>
  )
}

export default App
