import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className='nav'>
        <li>LOGO</li>
        <form>
          <input placeholder='Type a Movie title' />
          <button>Search</button>
        </form>
      </ul>
    </nav>
  );
};

export default Nav;
