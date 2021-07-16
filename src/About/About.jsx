import React from "react";
import PersonImg from './person.svg'
import './About.css';
function About() {
    return (
        <div className="person container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <img src={PersonImg}
                        className="person img-fluid"
                        alt=""/>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="personRight">
                        <p className="text-warning  text-start fs-5">About us</p>
                        <h3 className="text-start mt-2">Food Stalls with Persons but  to  Product marketing plane  catlogues etc to.
                        </h3>
                        <p className="text-start mt-2">
                            There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                                                equipment  make your marketing plane Effective.</p>
                        <button className="btn btn-warning mt-4">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
