import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';
import { UserContext } from '../../context/userContext';

const Navbar = ({ activeMenu, onToggleSidebar, isSidebarOpen }) => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [user, setUser]);

  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 py-4 px-7 sticky top-0 z-30">
      <button className="text-black" onClick={onToggleSidebar}>
        {isSidebarOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
      </button>
      <h2 className="text-4xl font-semibold font-serif tracking-tight text-blue-800">Expense Tracker</h2>
    </div>
  );
};

export default Navbar;





