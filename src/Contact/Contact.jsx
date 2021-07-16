import React from 'react';
import './Contact.css';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div className='Contact container-fluid '>
                <p className=" fs-5 text-warning">Contact
                </p>
                <h3 className="pContact text-center">Food Stalls with Persons but also specialized equipment, Skills to manage.</h3>
                <div className="container">
                    <div className="input d-flex justify-content-center mt-4 mb-5">
                        <input type="text" placeholder="Enter your email"/>
                        <button type="submit" className="btn btn-warning rounded">Sent</button>
                    </div>
                </div>
            </div>
        )
    }


}
export default Contact;
