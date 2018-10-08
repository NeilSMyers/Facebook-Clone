import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super()

  }
  render() {
    return (
      <div className="header-wrapper">
        <h3>Facebook</h3>
        <div className="search-bar" >
          <input placeholder="Search"/>
        </div>
        <div className="header-identity">
          <img src="../assets/images/fox.jpg"/>
          <span>{this.props.name}</span>
          <span>Home</span>
        </div>
        <div className="header-icons">
          <i class="fas fa-user-friends"></i>
          <i class="fas fa-comment"></i>
          <i class="fas fa-globe-americas"></i>
        </div>
      </div>
    )
  }
}

export default Header;