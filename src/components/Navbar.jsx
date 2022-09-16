import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {

let [searchVal,setSearchVal] = useState("")
    return ( 
     <nav className="navbar navbar-expand-lg  navbar-dark bg-dark justify-content-space-between">
       <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />

      <form className="d-flex nav-form" role="search">
        <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" value={searchVal} onChange={(e)=>{setSearchVal(e.target.value);}}/>
        {/* <input type="search" value={searchVal} onChange={(e)=>{setSearchVal(e.target.value);}}/> */}
          <Link to={`Search${searchVal}`}>
            <button className="btn btn-outline-warning" type="submit">search</button>
          </Link>
          
            </form> 
            <br />
            <br />
            <br />
            <br />

           <div className='p-5'>
          <Link to="/wishlist">
              <a className="btn btn-outline-warning" aria-current="page" href="#">Wishlist</a>
          </Link>
        </div>
      
    </nav>

     
     );
}
 
export default Navbar;
