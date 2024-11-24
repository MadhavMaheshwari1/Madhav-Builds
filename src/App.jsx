import React, { useEffect } from 'react';
import { Cursor } from "./components/Cursor";
import { Cover } from "./components/Cover";
import GlobalStyles from "./styles/GlobalStyles";
import { Routes, Route, useLocation } from "react-router-dom";
import { Works } from "./pages/Works";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/HomePage";
import { Project } from "./pages/Project";
import { AnimatePresence } from "framer-motion";

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
  });

  useEffect(() => {
    root.style.setProperty("--VW", `${window.innerWidth * 0.01}px`);
    root.style.setProperty("--VH", `${window.innerHeight * 0.01}px`);
  }, [root.style]);

  return (
    <div className="App">
      <GlobalStyles />
      <Cover />
      <Cursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:projectID" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
