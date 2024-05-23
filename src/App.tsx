import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Typepages from './page/Typepages'
import MainLayout from './layout/MainLayout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout arrow={false}>
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path="/types/:id"
                    element={
                        <MainLayout arrow={true}>
                            <Typepages />
                        </MainLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
