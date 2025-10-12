import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import { UserContext } from '../../context/userContext';

const DashboardLayout = ({ children, activeMenu }) => {
  const { user, setUser } = useContext(UserContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [user, setUser]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        activeMenu={activeMenu}
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`bg-white shadow-md transition-all duration-300 ${
            isSidebarOpen ? 'w-64' : 'w-0'
          } overflow-hidden`}
        >
          <SideMenu activeMenu={activeMenu} />
        </div>

        {/* Main content */}
        <main className="flex-grow mx-5 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;





