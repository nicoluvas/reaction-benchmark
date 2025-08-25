function App() {
  function handleClick(){
    console.log('xclicked');
  }
  return (
    <div onClick={handleClick}>
        <h1>reaction time benchmark</h1>
        <p>click anywhere to start</p>
    </div>
  )
}

export default App
