import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-red-300 flex justify-around align-center p-2'>
      <div>
        <h1 className='text-2xl font-bold '>Task Manager</h1>
      </div>
      <div>
        <ul className='flex gap-3 font-bold'>
          <li className='bg-white p-1 m-1 rounded hover:bg-emerald-100'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='bg-white p-1 m-1 rounded hover:bg-emerald-100'>
            <NavLink to='/add'>Add task</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
