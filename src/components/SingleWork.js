import React from 'react'

 const SingleWork = ({name, project,image, code}) => {
    let link = null;
    if(code !== ''){
        link = (<a href={code} className="code-link" target="_blank" rel="noopener noreferrer"> VIEW CODE</a>)
    }
    let live = null;
    if(project !== ''){
        live = ( <a href={project} className="project-link" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>)
    }
    return (
        <div className="single-work" style={{backgroundImage : `url(${image})`}}>
            <h3>{name}</h3>
           {live}
            {link}
        </div>
    )
}
 export default SingleWork