import React from "react";
import './menu.css';
import Start from '../start.svg'
function Card({url,title,price,content}){
return(
    <div className='d-flex mt-4 card flex-column'>
    <img src={url} alt="" />
    <div className="comment mt-3">
    <div className="title   mt-3">
        <h4 className="text-start">{title}</h4>
        <p className="fw-bold mt-2 mx-4">{price}</p>
    </div>
    <div className="comment  mt-2">
         {content}
    </div>
    <div className="footerCard  mt-3 px-3">
        <button className="btn fw-bold fs-3 rounded btn-warning text-white py-1 px-2 text-center">+</button>
        <div className="startIcon d-flex">
            <img src={Start} alt="" />
            <img src={Start} alt="" />
            <img src={Start} alt="" />
            <img src={Start} alt="" />
            <img src={Start} alt="" />
        </div>
    </div>
    </div>
</div>
)
}
export default Card;