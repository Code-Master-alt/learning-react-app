import React from 'react';
import PropTypes from 'prop-types';
// import { a } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="#">{props.title}</a>
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-hrefggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auhref">
        <li className="nav-item active">
          <a className="nav-a" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#">{props.about}</a>
          <a className="nav-a" href="#">{props.about}</a>
        </li>
       
        <li className="nav-item">
          
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.hrefggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      
    </div>
  </nav>
  );
}
Navbar.propTypes = { title:PropTypes.string
,                    about:PropTypes.string}
                     