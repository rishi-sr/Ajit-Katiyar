import { useState, useEffect } from 'react'
import './App.scss'
import Navbar from './pages/navbar/Navbar'
import AboutMe from './pages/aboutme/AboutMe'
import Experience from './pages/experience/Experience'


function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <AboutMe theme={theme}/>
      <Experience theme={theme}/>
    </div>
  )
}

export default App
