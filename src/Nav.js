import React from "react";
import logo from "./logo.png";

const Nav = () => {
  return (
    <nav>
      <ul className='nav'>
        <li>
          <img src={logo} alt='logo' />
        </li>
        <form>
          <input placeholder='Type a Movie title' />
          <button>Search</button>
        </form>
      </ul>
    </nav>
  );
};

export default Nav;
