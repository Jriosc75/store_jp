import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Muitheme from './themes/Muitheme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Muitheme>
            <App />
        </Muitheme>
    </React.StrictMode>
)
