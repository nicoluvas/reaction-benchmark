import { useRef, useState } from 'react'

function App() {
  const [color, setColor] = useState('#242424')
  const [p, setP] = useState('click anywhere to start')
  const [span, setSpan] = useState('')
  const [active, setActive] = useState(false)
  const startTime = useRef(null)

  function handleClick() {

    // if clicked mid test else you clicked after or befor test
    if (active) {

      // if clicked too soon else at green
      if (color == '#1a130fff') {
        setP('too soon')
      } else if (color == '#121b15ff') {
        const endTime = performance.now()
        const reactionTime = endTime - startTime.current
        setP(`your speed was ${reactionTime}ms`)
        setSpan('click again to redo')
        setActive(false)
      }
    
    } else {
      setActive(true)
      setColor('#1a130fff')
      setP('wait to green')
      setSpan('')
      let rand = Math.floor(Math.random() * (40 - 15) + 15)
      const interval = setInterval(() => {
        if (rand > 0) {
          rand--
          console.log('countdown: ' + rand)
        } else { // when countdown ends
          clearInterval(interval)
          setColor('#121b15ff')
          setP(`its green`)
          startTime.current = performance.now()
        }
      }, 100)
    }

  }

  return (
    <div className='main' onClick={handleClick} style={{ backgroundColor: color }}>
      <p>{p}</p>
      <span>{span}</span>
    </div>
  )
}

export default App
