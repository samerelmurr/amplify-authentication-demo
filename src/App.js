import { Routes, Route, NavLink } from 'react-router-dom';
// import { Pages } from './pages/Pages';
import { Pages } from './pages/Index';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <NavLink to="/" exact activeClassName="active"  className="content">Home</NavLink>
        <NavLink to="/about" activeClassName="active"   className="content">About</NavLink>
        <NavLink to="/premium" activeClassName="active" className="content">Premium</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/premium" element={<Pages.Premium />} />
      </Routes>
    </div>
  );
}

export default App;
