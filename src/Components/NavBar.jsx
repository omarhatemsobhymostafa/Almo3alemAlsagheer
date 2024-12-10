import React from 'react'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom';

export default function NavBar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav>
      <div className="logo-container" >

        <img src={Logo} alt="" />


      </div>


      <div className="nav-list" id="nav-list">

        <ul className="menu-ul" >


          <Link className="nav-link" to="/the-little-teacher/home" onClick={scrollToTop}>الرئيسية</Link>
          <Link className="nav-link" to="/the-little-teacher/quiz/grade-6" onClick={scrollToTop}>تعلم</Link>
          <Link className="nav-link" to="/the-little-teacher/sources" onClick={scrollToTop}>المصادر</Link>


        </ul>
      </div>

    </nav>

  )
}
