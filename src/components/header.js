import React from 'react';
import {Link} from 'react-router-dom';

import './css/header.css';


class Header extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">Monitoreo</Link>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ingreso">Ingreso</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/map">Mapa</Link>
                                </li>
                            </ul>
                        </div>
                        {this.props.avatar!=null?<this.props.avatar/>:''}
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;