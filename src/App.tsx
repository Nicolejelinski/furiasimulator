import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Descubra from './pages/Descubra';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Descubra />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;