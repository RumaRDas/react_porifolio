import React from 'react';
import LionAPP from '../../images/Lion_app.png';
import Suicide from '../../images/project_1.png';
import Heroku from '../../images/icons8-heroku-48.png';

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
                <div class="col-md-4 shadow">
                <div class="itemBox">
                    <a href="https://nicolegeorge.github.io/suicide-squad-GoT-app/" target="_blank">
                        <img src={Suicide} alt="Nature" class="img-fluid"/>
                    </a>
                    <div class="box">
                        <h3 class="text-info ">Game of Thrones</h3>
                        <p>This Is a group project Using Foundation CSS Framework, CSS, Jquery, JavaScript</p>
                        <a href="https://github.com/NicoleGeorge/suicide-squad-GoT-app.git" target="_blank">
                            <i class="fa fa-github text-info icon"></i>
                        </a>
                    </div>
                </div>
            </div>
                </div>
                </div>
               

    )
}

export default index
