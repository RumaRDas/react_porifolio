import React from 'react';
import "./style.css";

const index = ()  =>{
    return (
        <div>
        <div className="container substyle ">
        <div className="row">
            <div className="col-lg-5 col-md-12  ">
                <img src="./images/ruma.jpg" className="img-fluid d-none d-lg-block float-right " alt=""/>
            </div>
            <div className="col-lg-6 col-md-12 abstyle">
                <h1 className="display-4 text-info  ">About Me</h1>
                    <p>Very passionate about programming and software designing. Have strong analytical skills with
                        knowledge in software development, database programming and website design. A self-motivated
                        and goal orientated individual with a passion to work as a programmer. Can take the
                        responsibility for achieving outcomes, meeting deadlines with can do attitude. I am a very
                        quick learner, always love take new challenges and an excellent team member. </p>
                    <a href="./Resume Ruma Das.pdf" className="btn btn-outline-info btn-lg " target="_blank"> My
                        Resume</a>
            </div>
        </div>
    </div>  
        </div>
    )
}

export default index
