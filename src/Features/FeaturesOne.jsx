import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function FeaturesOne({title,content,icon}){
return(
<div className="d-flex flex-column justify-content-center align-items-center mx-3">
    <div className="icon rounded-circle d-flex  bg-warning text-white  justify-content-center align-items-center">
        <FontAwesomeIcon icon={icon}/>
    </div>
    <div >
    <h1 className="fw-bold fs-4"> {title}</h1>
    <p> {content}</p>
    </div>
</div>



)
}
export default FeaturesOne;