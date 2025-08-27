import { useEffect, useRef, useState } from 'react'

function App() {
  const [color, setColor] = useState('#242424')
  const [p, setP] = useState('click anywhere to start')
  const [active, setActive] = useState(false)

  function handleClick() {
    if (active) {

      if (color == '#1a130fff') {
        setP('too soon')
      } else if (color == '#121b15ff') {
        setP('yaaay on green')
      }

    } else {

      setActive(true)
      setColor('#1a130fff')
      setP('wait to green')

      let rand = Math.floor(Math.random() * (20 - 5) + 5)
      const interval = setInterval(() => {
        if (rand > 0) {
          rand--
          console.log('baixo: ' + rand)
        } else {
          setActive(false)
          clearInterval(interval)
          setColor('#121b15ff')
          setP(`its green`)
        }
      }, 100)
    }

  }

  return (
    <div className='main' onClick={handleClick} style={{ backgroundColor: color }}>
      <p>{p}</p>
    </div>
  )
}

export default App
