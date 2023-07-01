import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function NavBar(props) {
  // function switchMode(){
  //   if(props.mode1=='light') 
  //     return 'black';
  //   else return 'white';
  // }
  function capitaliseFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    <div className="header1">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">About</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-Link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>

            {/* SEARCH BAR */}
            {/* <form className="d-flex mx-5" role="search">
              <input className="form-control me-2 mx-5" type="search" placeholder="Search" aria-label="Search" />
              <button type="button" className="btn btn-info ">Search</button>
            </form> */}

          </div>
          {/* Dark Mode */}
          <div className={`mx-2 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label " for="flexSwitchCheckDefault">{capitaliseFirst(props.mode === 'light' ? 'dark' : 'light')} Mode</label>
          </div>
          {/* Night Mode */}
          <div className="mx-2 form-check form-switch text-light" >
            <input onClick={props.toggleMode1} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label " for="flexSwitchCheckDefault" style={{ color: 'black' }}>{capitaliseFirst(props.mode1 === 'light' ? 'night' : 'light')} Mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}

NavBar.propTypes = {
  title: propTypes.string.isRequired
};
NavBar.defaultProps = {
  title: "YourSite"
};