import React from 'react';
import logo from '../logo2.svg';
import {FaBars, FaTimes} from 'react-icons/fa';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from './link/link';

class Navbar extends React.Component {
    state = {
        hide: false
    }

    navHide = () => {
        this.setState((state) => {
            return {
                hide: !state.hide
            }
        })
    }
    render() {


        return (
            <div className="navsection  px-5  shadow  ">
                <img src={logo}
                    className="AppMini"
                    alt="logo"/>
                <div className={
                    `nav__menu ${
                        this.state.hide && "navMenuShow" || ""
                    }`
                }>

                    <ul className=" d-flex fs-1 justify-content-around media align-items-center">
                      
                        <li>
                            <Link url="https://github.com/BehzodHamroyev/CodePen" title="Home"/>
                        </li>
                        <li>
                            <Link url="https://github.com/BehzodHamroyev/CodePen" title="About"/>
                        </li>
                        <li>
                            <Link url="https://github.com/BehzodHamroyev/CodePen" title="Menu"/>
                        </li>
                        <li>
                            <Link url="https://github.com/BehzodHamroyev/CodePen" title="Fatures"/>
                        </li>
                        <li>
                            <Link url="https://github.com/BehzodHamroyev/CodePen" title="contact Us"/>
                        </li>

                    </ul>
                </div>
                <button className="btn btn-warning d-none d-lg-block  text-white">Booking Now
                </button>
                <button className="d-lg-none btn"
                    onClick={
                        this.navHide
                }><FaBars className={
                        `${
                            this.state.hide && "d-none" || ''
                        }`
                    }/><FaTimes className={
                      `${
                          !this.state.hide && "d-none" || ''
                      }`
                  }/></button>

            </div>

        )
    }
}
export default Navbar;
