import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
function Navbar({setShowLogin}) {

  const [menu,setMenu] = useState("menu");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
   <div className='navbar'>
  {/* <img src={assets.logo} className='logo'/> */}
 <Link to='/'> <h1>RestoCafe</h1></Link>
  
  {/* Updated class names to match your CSS file */}
  <ul className='navbar-menu'>
    <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
    <a href='#food-display' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
    <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
    <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
  </ul>

  <div className='navbar-right'>
    <img className='search-icon' src={assets.search_icon}/>
    <div className='navbar-search-icon'>
     <Link to='/cart'><img className='basket-icon' src={assets.basket_icon}/></Link> 
      <div className={getTotalCartAmount()===0?"":"dot"}></div>
    </div>
    <button  onClick={()=>setShowLogin(true)} >Sign in</button>
  </div>
</div>
  )
}

export default Navbar
