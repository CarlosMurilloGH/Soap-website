import React from "react";
import { Link } from 'gatsby';

function Navbar () {
  return (
    <div>      
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>

  </div>
  )
}

export default Navbar;
