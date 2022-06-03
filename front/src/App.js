import logo from './logo.svg'

import './App.css'
import './Components.css'

import { Message } from './components/Message.js'
import { Header } from './components/Header.js'

function App() {
    return (
        <div className="App">
            <Header />
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
