import React from 'react';
import '../master.css';
class Header extends React.Component{
  render(){
    return(
      <header className="header-desktop">
        <div className="header-left">
          <a href="">
            <p>HOME</p>
          </a>
          <a href="">
            <p>PRODUCTS
              <i className="fas fa-angle-down" style={{opacity:0.7}}></i>
            </p>
          </a>
        </div>
        <div className="logo">
          <h4>panditplastic</h4>
        </div>
        <div className="header-right">
          <a href="">
            <p>ABOUT</p>
          </a>
          <a href="">
            <p>CONTACT</p>
          </a>
        </div>
    </header>
    )
  }
}
export default Header;