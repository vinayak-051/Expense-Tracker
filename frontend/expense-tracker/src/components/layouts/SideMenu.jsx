import React, { useContext, useEffect, useRef, useState } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import uploadImage from '../../utils/uploadImage';

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [user, setUser]);

  const handleClick = (route) => {
    if (route === 'logout') {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/login');
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const data = await uploadImage(file);
      if (data?.imageUrl) {
        const updatedUser = { ...user, profileImageUrl: data.imageUrl };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        console.error('No image URL returned from upload');
      }
    } catch (error) {
      console.error('Failed to upload image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const getCharAvatar = () => {
    const name = user?.fullName || 'U';
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="bg-gray-100 h-full w-64 p-4 shadow-md">
      <div className="flex flex-col items-center mb-6">
        {isUploading ? (
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mb-2 animate-pulse">
            <span className="text-sm text-gray-600">Uploading...</span>
          </div>
        ) : user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover mb-2 cursor-pointer"
            onClick={triggerFileInput}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '';
              setUser({ ...user, profileImageUrl: '' });
            }}
          />
        ) : (
          <div
            className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-2 cursor-pointer"
            onClick={triggerFileInput}
          >
            {getCharAvatar()}
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageUpload}
        />
        <h5 className="text-lg font-semibold text-center">
          {user?.fullName || 'User'}
        </h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 transition-colors ${
            activeMenu === item.label
              ? 'bg-blue-100 font-bold'
              : 'hover:bg-gray-200'
          }`}
          onClick={() => handleClick(item.route)}
        >
          <span className="text-xl">{React.createElement(item.icon)}</span>
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;




