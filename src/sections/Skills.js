import React, {useState} from 'react';
import {iconData as data} from '../data'

//images
import skills from '../images/skills.png';
import personal from '../images/personal.png'

 const Skills = () => {
const[id, setId]= useState('skills');

let img = skills;
if (id==='personality'){
  img = personal;
}else {
  img = skills;
}

let skillContent = data[0];
if (id==='personality'){
  skillContent = data[1];
}else {
  skillContent = data[0];
}

  return (
    <section id="skills">
      <div className="skill-container">
      <div className="skill-btns">
      <button onClick={()=> setId('skills')} className={id==='skills'?'active':null}>skills</button>
      <button onClick={()=> setId('personality')} className={id==='personality'?'active':null}>personality</button>
  </div>
  <div className="skill-icons-container">
{skillContent.map((item,index)=>{
  return(<div key={index} className="tooltip">
    <item.icon   className='skill-icon'  />
<div className="tooltip-text">{item.text}</div>
      </div>)
})}

  </div>
  <div className="skill-img">
  <img src={img} alt="" />
  </div>
  
  </div>
    </section>
  )
}

export default Skills