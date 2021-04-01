import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className='nav'>
        <li>LOGO</li>
        <form>
          <input placeholder='Search....' />
          <button>Search</button>
        </form>
      </ul>
    </nav>
  );
};

export default Nav;
