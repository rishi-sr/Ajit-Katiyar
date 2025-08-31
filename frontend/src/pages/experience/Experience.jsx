import React from 'react'
import './exp.scss'
import{ useState, useEffect } from 'react';

const exp=[
  { 
    name: "Accenture Solutions, Noida - Manager AI", 
    duration: "Aug 2021 – Present",
    url:"accenture.png",
    highlights: [
      "Managing Data Science & AI teams for modern AI solutions",
      "Implemented prompt engineering & APIs in AWS SageMaker",
      "Built & deployed Generative AI apps with LLMs (FlanT5, Falcon 7B, Mistral, ChatGPT-3.5, Langchain)",
      "Research on enhancing insurance agent-customer communication via advanced LLMs",
      "Projects: AI-Tutor (learning/training portal) & Precision Farming (IoT + AI for agriculture)",
      "Awarded: Beyond Performance – Accenture Innovation GTIC Idea Implementation 2022"
    ]
  },
  { 
    name: "Finicity Technologies (A Mastercard Company), Mumbai - Data Scientist", 
    url:"fincity.png",
    duration: "Feb 2020 – Jun 2021",
    highlights: [
      "Led team of 8 (Data Scientists, Engineers, DevOps) for NLP-based credit scoring apps",
      "Worked with encoder-only, decoder-only, and encoder-decoder Transformers, LLMs & GANs",
      "Achieved 100% defect reduction in legacy app through effective feedback & mentoring"
    ]
  },
  { 
    name: "HCL Technologies Limited, Noida - Sr. Technical Lead (Data Science)", 
    url:"hcl.png",
    duration: "Mar 2016 – Jan 2020",
    highlights: [
      "Developed computer vision healthcare applications",
      "Built AI microservices for the energy sector (prediction analysis)"
    ]
  },
  { 
    name: "Netlink Software Pvt Ltd (Xeeva Inc), Gurgaon/Bhopal - Data Engineer", 
    url:"netlink.png",
    duration: "Mar 2014 – Jan 2016",
    highlights: [
      "Applied data mining techniques to extract insights",
      "Developed Big Data applications using R, MapReduce, Spark RDD API"
    ]
  },
  { 
    name: "Mahindra Comviva, Gurgaon - Lead Engineer", 
    duration: "May 2010 – Sep 2012",
    url:"mahindra.png",
    highlights: [
      "Worked on telecom domain solutions",
      "Contributed to large-scale engineering projects"
    ]
  },
  { 
    name: "I-Gate, Noida - Software Engineer", 
    duration: "Jun 2008 – May 2010",
    url:"igate.png",
    highlights: [
      "Developed GIS/GPS product modules using Oracle 8i & PL/SQL",
      "Worked with Unix shell scripting for automation"
    ]
  }
]



const Experience = ({theme}) => {

    const [selectedIdx, setSelectedIdx] = useState(0);
    useEffect(() => {
  const interval = setInterval(() => {
    setSelectedIdx((prevIdx) => (prevIdx + 1) % exp.length);
  }, 2000);

  return () => clearInterval(interval);
}, [exp.length]);

    
  return (
    <>
    <div className={`experience theme-${theme}`}>
        <div className="heading">
            <h2>Experience</h2>
            <div className="underline"></div>
            <p>
                Gained hands-on experience in web development through internships and projects,  
                working with React, Java, Spring Boot, and MySQL to build real-world applications.
            </p>
        </div>
        <div className="exp-content">
            <div className="card-exp">
                <div className="img">
                    <img src={exp[selectedIdx].url} alt="" />
                </div>
                <div className="details">
                        <div className="det-card">
                            <h3>{exp[selectedIdx].name}</h3>
                            <p>{exp[selectedIdx].duration}</p>
                            <p>{exp[selectedIdx].highlights.join(", ")}</p>
                        </div>
                </div>
            </div>
            <div className="experiences">
              {exp.map((e, key) => (
                <div className="exp-body" key={key} onMouseEnter={() => setSelectedIdx(key)}>
                  <div className="part1">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                  <div className="part2">
                    <div className="det-card">
                      <h3>{e.name}</h3>
                      <p>{e.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>
    </div>
    </>
  )
}

export default Experience
