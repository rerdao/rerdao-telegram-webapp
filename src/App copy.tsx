import { useState } from 'react'
import rerLogo from './assets/RER-black.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://rerdao.xyz" target="_blank">
          <img src={rerLogo} className="logo react" alt="logo" />
        </a>
      </div>
      <h1>Welcome!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Connect Wallet {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Vote {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click the Logo to Visit the URL
      </p>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
          Show Alert
        </button>
      </div>
    </>
  )
}

export default App
