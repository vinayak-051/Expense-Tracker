import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext'; 
import { axiosInstance } from '../utils/axiosInstance'; 
import { API_PATHS } from '../utils/apiPaths'; 

export const useUserAuth = async () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);

        if (isMounted && response.data) {
          updateUser(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch user info', error);
        if (isMounted) {
          clearUser();
          navigate('/login');
        }
      }
    };

    if (!user) {
      fetchUserInfo();
    }

    return () => {
      isMounted = false;
    };
  }, [user, updateUser, clearUser, navigate]);

  return { user, updateUser, clearUser };
};

