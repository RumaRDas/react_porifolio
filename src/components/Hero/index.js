import React from "react";
import pic from "../../images/home_pic.png"
import "./style.css";

const  Hero = (props) =>{
  return (
    // <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    //   {props.children}
    // </div>
    <div id="home" className="py-5 text-center text-light pt-5">
        <div className="primary-overlay">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6 col-md-12 ">
                        <h1 className="display-1  ">Ruma Das</h1>
                        <p className="lead">Hello, I am a full-stack web developer. Web designing has been a passion of mine
                            for a very long time and I would be honoured to help provide an insightful website for
                            anyone. </p>
                    </div>
                    <div className="col-lg-6 mt-5  ">
                        <img src={pic} className="img-fluid d-none d-lg-block float-right " alt="homeSImg"/>
                    </div>
                </div>
            </div>
            <div id="navbarhead"></div>
        </div>   
    </div>
  );
}

export default Hero;