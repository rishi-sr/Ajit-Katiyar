import { useState, useEffect } from 'react'
import './App.scss'
import Navbar from './pages/navbar/Navbar'
import AboutMe from './pages/aboutme/AboutMe'


function App() {
  const [theme, setTheme] = useState("light");

  // load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // save theme to localStorage & apply to body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <AboutMe theme={theme}/>
    </div>
  )
}

export default App
