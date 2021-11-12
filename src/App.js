import {BrowserRouter, Routes,Route}  from 'react-router-dom'
import './App.css';
import HomeAdmin from './layouAdmin/HomeAdmin';
import Home from './layoutHome/Home'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/admin" element={<HomeAdmin/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
