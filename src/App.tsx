import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 페이지 컴포넌트
import MainPage from './pages/index/MainPage'


function App() {
    return (
        //<MainPage />
        <BrowserRouter>
            <Routes>
                <Route index path="/album-kinglee/" element={<MainPage />}></Route>
                {/* <Route path="search/:id" element={<MainPage />}></Route> */}
                {/* <Route path="/bookmark" element={<BookmarkPage />}></Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App