import React from 'react'
import './style.css';
const index = () => {
    return (
       <div className="container">
       <div id="accordion" role="tablist" class="pt-5">
       <div className="card">
           <div className="card-header" role="tab">
               <h5 className="mb-0">
                   <div data-toggle="collapse" href="#collapse1">
                       <i className="fa fa-arrow-circle-down"></i> Front and Development
                   </div>
               </h5>
           </div>
           <div id="collapse1" className="collapse show" data-parent="#accordion">
               <div className="card-body">
                   <p className="lead"> For designing a website as a frontend developer I am good in HTML,
                       CSS, Bootstrap, Foundation framework. </p>
               </div>
           </div>
       </div>
       <div className="card" role="tablist">
           <div className="card-header">

               <div data-toggle="collapse" href="#collapse2" className="">
                   <h5 className="mb-0">
                       <i className="fa fa-arrow-circle-down"></i>
                       Backend Development</h5>
               </div>
           </div>
           <div id="collapse2" className="collapse" data-parent="#accordion">
               <div className="card-body">
                   <p className="lead"> As a backend developer I can use Javascript, Jquery, Node Js</p>
               </div>
           </div>

       </div>

       <div className="card" role="tablist">
           <div className="card-header">
               <h5 className="mb-0">
                   <div data-toggle="collapse" href="#collapse3">
                       <i className="fa fa-arrow-circle-down"></i> Collaboration
                   </div>
               </h5>

           </div>
           <div id="collapse3" className="collapse" data-parent="#accordion">
               <div className="card-body">
                   <p className="lead">I have experience in Github to collaboration As a group </p>
               </div>
           </div>

       </div>
       <div className="card" role="tablist">
           <div className="card-header">
               <h5 className="mb-0">
                   <div data-toggle="collapse" href="#collapse4">
                       <i className="fa fa-arrow-circle-down"></i> Graphics Designing
                   </div>
               </h5>

           </div>
           <div id="collapse4" className="collapse" data-parent="#accordion">
               <div className="card-body">
                   <p className="lead">I have Knowledge of photoshop and Illustrator </p>
               </div>
           </div>

       </div>

   </div>
       </div>
    )
}

export default index;
