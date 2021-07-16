import React from 'react';
import homeImg from './homeImg.svg';
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function home(){
return(
<div className="container home">
<div className="row">
<div className="col-lg-5 col-md-6">
    <div className="left d-flex flex-column">
      <h1 className="my-5">Making time a good time by making food the good food.</h1>
      <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
      <div className="d-flex">
          <button className="btn btn-warning text-white shadow rounded">Order Now</button>
          <button className="btn btn-light text-warning ms-4 shadow  rounded">Food Details</button>
      </div>
    </div>
    </div>
     <div className="col-lg-7  col-md-6">
    <img src={homeImg} className="imgHome img-fluid" alt="home img" />
    </div>
</div>
</div>
)
}
export default home;
