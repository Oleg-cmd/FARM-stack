import logo from './logo.svg'
import './App.css'

import { Message } from './components/Message.js'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a>
                    <Message />
                </a>
            </header>
        </div>
    )
}

export default App
