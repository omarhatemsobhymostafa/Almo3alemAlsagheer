import React from 'react'
import Logo from '../Images/ألادريسس.png'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
    <div className="logo-container" >
    
      <img src={Logo} alt=""/>
      
       
    </div>


    <div className="nav-list" id="nav-list">

        <ul className="menu-ul">

           <Link className="nav-link" to={"/home"}>الرئيسية</Link>
           <Link className="nav-link" to={"/quiz"}>اختبر نفسك</Link>
           <Link className="nav-link">لوحة التحكم</Link>
        </ul>
    </div>

</nav>

  )
}
