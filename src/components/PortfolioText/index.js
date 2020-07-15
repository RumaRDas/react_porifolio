import React from 'react';
import LionAPP from '../../images/Lion_app.png';
import Suicide from '../../images/project_1.png';
import Heroku from '../../images/icons8-heroku-48.png';
import Prtfolio from '../../images/portfolio.png';
import Weather from '../../images/weather_ dashboard.png';

import "./style.css";

const index = () =>{
    return (
       
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-4 shadow">
                    <div className="itemBox">
                        <a href="https://lion-movie-store.herokuapp.com/" target="_blank">
                            <img src={LionAPP}alt="lionsStore" className="img-fluid"/>
                        </a>

                        <div className="box">
                            <h3 className="text-info ">Lion Stor App</h3>
                            <p>Trchonologies: Vue Materialize Framework, CSS,MySQL,Json Web Token,node.js,express </p>
                            <a href="https://github.com/RumaRDas/LionStoreApp.git" target="_blank">
                                <i className="fa fa-github text-info icon"></i>
                            </a>
                            <a  href="https://lion-movie-store.herokuapp.com/" target="_blank">
                                <img  src={Heroku} alt="heroku" className="imgSize"/>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 shadow">
                <div className="itemBox">
                    <a href="https://nicolegeorge.github.io/suicide-squad-GoT-app/" target="_blank">
                        <img src={Suicide} alt="Nature" className="img-fluid"/>
                    </a>
                    <div className="box">
                        <h3 className="text-info ">Game of Thrones</h3>
                        <p>This Is a group project Using Foundation CSS Framework, CSS, Jquery, JavaScript</p>
                        <a href="https://github.com/NicoleGeorge/suicide-squad-GoT-app.git" target="_blank">
                            <i className="fa fa-github text-info icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="itemBox">
                <a href="https://rumardas.github.io/portfolio" target="_blank">
                    <img src={Prtfolio} alt="Nature" className="img-fluid"/>
                </a>
                <div className="box">
                    <h3 className="text-info ">BootCamp PortFolio</h3>
                    <p>Responsive website design using HTML5, CSS,BootStrap</p>
                    <a href="https://github.com/RumaRDas/portfolio.git" target="_blank">
                        <i className="fa fa-github text-info icon"></i>
                    </a>
                </div>
            </div>
        </div>
                </div>
                <div className="row pt-0 pt-md-4 ">
                <div className="col-md-4">
                    <div className="itemBox">
                        <a href="https://rumardas.github.io/weather_dashboard/" target="_blank">
                            <img src={Weather} alt="Nature" className="img-fluid"/>
                        </a>
                        <div className="box">
                            <h3 className="text-info ">Weather Dashboard</h3>
                            <p>Responsive website design using HTML5, CSS,BootStrap, Javascript,Jquery, Ajex</p>
                            <a href="https://github.com/RumaRDas/weather_dashboard.git" target="_blank">
                                <i className="fa fa-github text-info icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                </div> 
                </div>
               

    )
}

export default index
