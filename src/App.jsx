import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>🎵 MusicDist Frontend</h1>
      <p>Welcome to your Vite + React setup</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </button>
      <br />
      <img src={reactLogo} alt="React Logo" width="80" />
    </>
  )
}

export default App
