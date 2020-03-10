import React from 'react'
import SingleWork from '../components/SingleWork'
//import data1
import {projects} from '../data'
import {wpProjects} from '../data'

//import data2
const Work = () => {
  return (
    <section id="work" className="work">
      <div className="projects">
{projects.map(item => <SingleWork key={item.name} name={item.name} project={item.project} image={item.image} code={item.code}/>)}
        {/* map data 1 into singlework */}
      </div>
      <div className="wp-projects">
        {/* map data 2 into singlework */}
 {wpProjects.map(item => <SingleWork key={item.name} name={item.name} project={item.project} image={item.image} code={item.code}/>)}
      </div>
    </section>
  )
}

export default Work