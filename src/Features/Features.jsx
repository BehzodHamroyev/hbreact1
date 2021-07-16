import React from "react";
import './Features.css';
import FeaturesOne from './FeaturesOne'
import {faHome,faTruck,faSmileBeam} from '@fortawesome/free-solid-svg-icons';
function Features(){
return(
    <div className="container delivery flex-column d-flex w-100">
     <div className="d-flex flex-column w-100">
     <p className="text-warning text-center fs-5">Features</p>
        <h2 className="text-center">Food with a New Passion</h2>
     </div>
      <div className=" d-flex">
    <div className="row">
    <div className="col-lg-4 col-sm-12  mb-3">
       <FeaturesOne title="Quality Food" icon={faHome}  content="It can be a very secure path to earn good money and make you very successful creative entrepreneur."/>
       </div>
       <div className="col-lg-4 col-sm-12  mb-3">
       <FeaturesOne title="Food Delivery"  icon={faTruck} content="It can be a very secure path to earn good money and make you very successful creative entrepreneur."/>
       </div>
       <div className="col-lg-4 col-sm-12  mb-3">
       <FeaturesOne title="Super Taste"  icon={faSmileBeam} content="It can be a very secure path to earn good money and make you very successful creative entrepreneur."/>
       </div>
    </div>
      </div>
    </div>
)
}
export default Features;