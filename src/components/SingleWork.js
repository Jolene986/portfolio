import React from 'react'

 const SingleWork = ({name, project,image, code}) => {
    let link = null;
    if(code !== ''){
        link = (<a href={code} className="code-link" target="_blank" rel="noopener noreferrer"> VIEW CODE</a>)
    }
    return (
        <div className="single-work" style={{backgroundImage : `url(${image})`}}>
            <a href={project} className="project-link" target="_blank" rel="noopener noreferrer">{name}</a>
            {link}
        </div>
    )
}
 export default SingleWork