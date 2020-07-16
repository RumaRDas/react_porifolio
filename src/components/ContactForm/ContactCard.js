import React from 'react';
import './style.css';

const ContactCard  = () =>{
    return (

        <div className="col-md-5">
        <div className="card">
            <div className="card-body mt-0">
                <h3 className="mt-0 text-info">Get In Touch</h3>

                <h4>Address</h4>
                <p className="mb-0">Adelaide , South Australia</p>
                <h4 className="mt-0 emailStyle"><a
                        href="mailto:rumadl16@gmail.com?subject=subject text">Email</a></h4>

                <h4>Phone</h4>
            </div>
            <div className="d-flex flex-row justify-content-center text-info ">
                <div className="p-4 icon">
                    <a href="http://www.fb.com/" target="_blank">
                        <i className="fa fa-facebook "></i>
                    </a>
                </div>
                <div className="p-4 icon">
                    <a href="#" target="_blank">
                        <i className="fa fa-twitter "></i>
                    </a>
                </div>
                <div className="p-4 icon">
                    <a href="https://www.linkedin.com/in/ruma-das-a9967b19a/" target="_blank">
                        <i className="fa fa-linkedin "></i>
                    </a>
                </div>
            </div>
        </div>

    </div>

      
    )
}

export default ContactCard;
