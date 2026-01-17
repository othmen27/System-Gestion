import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignupPage from './pages/signupPage'
import MainPage from './pages/MainPage'
export const ExportedRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />}>
                </Route>
                <Route path="/signup" element={<SignupPage />}>
                </Route>
            </Routes>
        </Router>
    )
}
