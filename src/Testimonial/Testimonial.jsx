import React from 'react';
import './Testimonial.css';
import Img from './img1.svg'
import ImgStart from '../start.svg'
import ImgStart2 from './Vector (1).svg'
class Testimonial extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div className="Testimonial">
                <p className="text-center text-warning fs-5">Testimonial</p>
                <h3 className="text-center fw-bold">Making Food great again and again
                </h3>
                <p className="text-center w-75 p1 ">You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
                <img src={Img}
                    className="imgTestimonial"
                    alt=""/>
                <p className="w-50 p2">You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
                <div className="d-flex">
                    <img src={ImgStart}
                        alt=""/>
                    <img src={ImgStart}
                        alt=""/>
                    <img src={ImgStart}
                        alt=""/>
                    <img src={ImgStart}
                        alt=""/>
                    <img src={ImgStart2}
                        alt=""/>
                </div>
                <p className='p3'>Augusta W. Reynoso</p>
                <p className='p4'>UI&UX DeSIGNER</p>


            </div>
        )
    }


}
export default Testimonial;
