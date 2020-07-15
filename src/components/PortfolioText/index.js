import React from 'react';
import "./style.css";

const index = () =>{
    return (
       
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-4 shadow">
                    <div className="itemBox">
                        <a href="https://lion-movie-store.herokuapp.com/" target="_blank">
                            <img src="./images/Lion_app.png" alt="lionsStore" className="img-fluid"/>
                        </a>

                        <div className="box">
                            <h3 className="text-info ">Lion Stor App</h3>
                            <p>Trchonologies: Vue Materialize Framework, CSS,MySQL,Json Web Token,node.js,express </p>
                            <a href="https://github.com/RumaRDas/LionStoreApp.git" target="_blank">
                                <i className="fa fa-github text-info icon"></i>
                            </a>
                            <a  href="https://lion-movie-store.herokuapp.com/" target="_blank">
                                <img  src="./images/icons8-heroku-48.png" alt="heroku" className="imgSize"/>
                            </a>
                        </div>
                    </div>

                </div>
                </div>
                </div>
               

    )
}

export default index
