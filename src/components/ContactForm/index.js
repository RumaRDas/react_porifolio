import React from "react";
import "./style.css";
import ContactCard from "./ContactCard";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {
  return (
<div className="container">
<div className="row">
<div className="col-lg-12">
<div className="info-contact">
    <h2 className="display-4 text-info "> Contact</h2>
    <p className="lead">
    </p>
</div>
</div>
<div className="col-md-7">
<div className="card">
    <form id="contact form">
        <div className="card-body">
            <h3>Please fill out this form to contact me</h3>
            <div className="row mt-4">

                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" placeholder=" First Name" className="form-control"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" placeholder=" Last Name" className="form-control"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="email" placeholder=" Email" className="form-control"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" placeholder=" Phone Number" className="form-control"/>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <textarea name="" id="" cols="30" rows="5" placeholder="Message"
                            className="form-control"></textarea>
                    </div>
                </div>
                <div className="col-md-12">
                    <input type="submit" className="btn btn-lg btn-info btn-block"/>
                </div>
                <div id="message" className="massagestyle text-info ">
                    <h4></h4>

                </div>
            </div>
        </div>
    </form>
</div>
</div>
<ContactCard />

</div>
</div>
  );
}

export default SearchForm;
