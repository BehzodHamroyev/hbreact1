import React from "react";
import './link.css';
function Link({title, url}) {
    return (
            <a href={url}
                target="_blank"
                className='link'>
                {title}</a>
    )
}
export default Link;
