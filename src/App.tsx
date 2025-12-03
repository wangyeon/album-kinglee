import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 페이지 컴포넌트
import MainPage from './pages/index/MainPage'


function App() {
    return (
        //<MainPage />
        <BrowserRouter>
            <Routes>
                <Route path="/album-kinglee/" element={<MainPage />}></Route>
                <Route path="/album-kinglee/search/:id" element={<MainPage />}></Route>
                <Route path="/bookmark" element={<MainPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App