import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomeBody from '../components/HomeBody';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
