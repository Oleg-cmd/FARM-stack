import logo from './logo.svg'

import './App.css'
import './Components.css'

import { Header } from './components/Header.js'

import { Message } from './components/Message.js'
import { Request } from './components/Request.js'

function App() {
    return (
        <div className="App">
            <Header />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="block">
                    <Request />
                </a>
                <a>
                    <Message />
                </a>
            </header>
        </div>
    )
}

export default App
