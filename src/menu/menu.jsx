import React from 'react';
import './menu.css';

import Card from './Card';
import img1 from './img/1.svg';
import img2 from './img/2.svg';
import img3 from './img/3.svg';
import img4 from './img/4.svg';
import img5 from './img/5.svg';
import img6 from './img/6.svg';
function menu() {
    return (
        <div className="menu container">
            <p className="text-center text-warning fs-5">Menu</p>
            <h3 className="text-center">Food Full of treaty Love</h3>
            <p className="text-center w-75 mx-auto">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <Card url={img1} title='Vegie Muffen' price='16$' content="There are many things are needed to start the Fast Food Business." />
                </div>
                <div className="col-lg-4 col-sm-12">
                    <Card url={img2} title='Salads' price='12$' content="There are many things are needed to start the Fast Food Business." />
                </div>
                <div className="col-lg-4 col-sm-12">
                    <Card url={img3} title='Burger' price='10$' content="There are many things are needed to start the Fast Food Business." />
                </div>
                <div className="col-lg-4 col-sm-12">
                    <Card url={img4} title='Delmonico Steak dish' price='14$' content="There are many things are needed to start the Fast Food Business." />
                </div>
                <div className="col-lg-4 col-sm-12">
                    <Card url={img5} title='Egg Masala' price='9$' content="There are many things are needed to start the Fast Food Business." />
                </div>
                <div className="col-lg-4 col-sm-12">
                    <Card url={img6} title='Peach Melba dish' price='15$' content="There are many things are needed to start the Fast Food Business." />
                </div>
            </div>
        </div>
    )
}
export default menu;