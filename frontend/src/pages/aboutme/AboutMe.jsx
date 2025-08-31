import React from 'react'
import './about.scss'
import { FaFileDownload, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutMe = ({ theme }) => {
  return (
    <div className={`about ${theme}`}>
      <div className="section1">
        
        <div className="details">
          <div className="content">
            <div className="text">
              <h1>Hello, I'm <br /><span>Ajit Katiyar</span></h1>
              <p>I’m a Generative AI/ML & Data Science Expert based in India. I strive to build intelligent and innovative AI solutions that transform business operations through cutting-edge machine learning, deep learning, and large language models.</p>
              <a href="" download className={`Hello theme ${theme}`}> Say Hello</a>
            </div>
            <div className="exp">
              <div className={`box1 theme ${theme}`}> 
                  <h1>17+ Y.</h1>
                  <h5>Experience</h5>
              </div>
              <div className={`box2 theme ${theme}`}>
                  <h1>5+</h1>
                  <h5>Projects Completed</h5>
              </div>
              <div className={`box3 theme ${theme}`}>
                  <h1>3+</h1>
                  <h5>Happy Clients</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={`altimg theme ${theme}`}>
          <div className={`img theme ${theme}`}>
            <img src="demo.png" alt="" />
          </div>
        </div>
      </div>
      <div className={`section2 theme ${theme}`}>
        <div className={`part1 theme ${theme}`}>
          <div className={`card theme ${theme}`}>
            <div className="photo">
              <div className={`img theme ${theme}`}>
                <img src="demo.png" alt="" />
              </div>
              <div className={`social icons theme ${theme}`}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="abt">
              <div className="abttxt">
                <h3>I am a passionate AI/ML & Data Science Expert.</h3>
                <p>
                  I love to explore new technologies and implement them in real-world applications.<br /> <br />
                  My goal is to create innovative solutions that make a difference.

                </p>
                <a href="/Ajit-Kumar.pdf" download className={`download-btn theme ${theme}`}><FaFileDownload /> Resume</a>
              </div>
            </div>
          </div>
        </div>
        <div className="part2"></div>
      </div>
    </div>
  )
}

export default AboutMe
