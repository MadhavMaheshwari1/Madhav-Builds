import GlobalStyles from './styles/GlobalStyles.js';
import { Home } from './pages/HomePage.jsx';
import "./App.css";
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Cursor } from "./components/Cursor.jsx"
import { Cover } from "./components/Cover.jsx"
import Works from './pages/Works.jsx';
import About from './pages/About.jsx';

function App() {

  const location = useLocation();
  const root = document.documentElement;
  const width = window.innerWidth;

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    if (newWidth < 500) {
      if (newWidth !== width) {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  })

  useEffect(() => {
    root.style.setProperty("--VW", `${window.innerWidth * 0.01}px`);
    root.style.setProperty("--VH", `${window.innerHeight * 0.01}px`);
  }, [root.style])

  return (
    <div className="App">
      <GlobalStyles />
      <Cursor />
      <Cover />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
