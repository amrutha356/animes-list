import { Link } from 'react-router-dom'
import  logo  from  "../images/imageONE.png"


const Navbar = () => {
    return ( 
     <nav className="navbar navbar-expand-lg bg-light">
       <img src={logo} alt="" />
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> 
      <br />
      <br />
      <br />
      <br />


        <Link to="/wishlist">
          <a className="btn btn-primary" aria-current="page" href="#">Wishlist</a>
        </Link>
   
      
    </nav>

     
     );
}
 
export default Navbar;
