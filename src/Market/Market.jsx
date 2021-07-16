import ImgMarket from './shot 1.svg';
import ImgMarket2 from './Group 76.svg'

import React from 'react';
import './market.css';
class Market extends React.Component {
    render() {
        return (
            <div className=" container-fluid  m-0  market">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="leftMarket container ">
                                <p className="text-start text-warning fs-5">Take away</p>
                                <h3 className="text-start fw-bold">Food Stalls with Persons but  to  Product marketing plane.
                                </h3>
                                <p className="text-start ">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</p>
                                <img src={ImgMarket2} className="my-3 m-0 p-0 ImgMarket2" alt="" />
                            </div>

                        </div>
                        <div className="col-lg-6 col-12 ">
                            <img src={ImgMarket}
                                className="ImgMarket"
                                alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Market;
