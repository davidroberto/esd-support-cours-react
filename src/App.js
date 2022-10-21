import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles  />} />
        <Route path="/articles/:id" element={<Article  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
