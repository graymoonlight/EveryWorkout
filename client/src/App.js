import Home from './Pages/HomePage/Home';
import Nav from './Pages/NavPage/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/navigation' element={<Nav />} />
      </Routes>
    </Router>
  );
}

export default App;
