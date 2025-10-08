
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Candidate Table</Link>
        <Link to="/referral">Rform</Link>
        <Link to="/profile">Create Profile</Link>

      </nav>
    </div>
  );
};

export default Navbar;
