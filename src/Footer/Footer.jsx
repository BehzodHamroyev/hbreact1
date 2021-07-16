import React from "react";
import Logo from '../logo2.svg';
import faYoutube from './youtobe.png'
import faTwitter from './twiter.png'
import faFacebook from './facebook.png'
import faInstagram from './instagram.png'
import './Footer.css';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div className="Footer container-fluid">
                <div className="row container">
                    <div className="col-lg-3 cardFooter col-md-3 col-sm-6 col-12">
                        <a href="#" ><img className="logoFooter"
                                src={Logo}
                                alt=""/></a>
                        <a href="#" className=" text-start">www.company name.com</a>
                        <a href="#" className=" text-start">companyname@gmail.com</a>
                        <a href="#" className=" text-start">Phone: +7 485-118-03-25</a>
                    </div>

                    <div className="col-lg-3  cardFooter col-md-3 col-sm-6 col-12">
                        <p className="text-white">Home</p>
                        <a href="#" className=" text-start">Landingpage</a>
                        <a href="#" className=" text-start">Documentation</a>
                        <a href="#" className=" text-start">Referral Program</a>
                        <a href="#" className=" text-start">UI & UX Design</a>
                        <a href="#" className=" text-start">Web Design</a>
                    </div>
                    <div className="col-lg-3 cardFooter col-md-3 col-sm-6 col-12">
                        <p className="text-white">Menu</p>
                        <a href="#" className=" text-start">Landingpage</a>
                        <a href="#" className=" text-start">Documentation</a>
                        <a href="#" className=" text-start">Referral Program</a>
                        <a href="#" className=" text-start">UI & UX Design</a>
                        <a href="#" className=" text-start">Web Design</a>
                    </div>
                    <div className="col-lg-3 cardFooter col-md-3 col-sm-6 col-12">

                        <p className="text-white">Company</p>
                        <a href="#" className=" text-start">Landingpage</a>
                        <a href="#" className=" text-start">Documentation</a>
                        <a href="#" className=" text-start">Referral Program</a>
                        {/* <div className="icon">
                            <img className="imgFooter" src={faTwitter} alt="" />
                            <img className="imgFooter" src={faYoutube} alt="" />
                            <img className="imgFooter" src={faFacebook} alt="" />
                            <img className="imgFooter" src={faInstagram} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
