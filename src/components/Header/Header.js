import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


import "./Header.css"
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";






class Header extends React.Component {
  render() {
 
    return(
     
      <>
         
         <header>

<nav>
    {/* <img src="" width="180px" height="70px" class="logo"/> */}

    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">connect with us</a></li>
    </ul>
</nav>
</header>
      </>
    );
  }
}

export default (Header) ;