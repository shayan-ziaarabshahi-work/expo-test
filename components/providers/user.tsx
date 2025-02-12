import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser  } from '@/lib/appwrite';
import { isLoadingAction, logInAction, userAction } from '@/redux/slices/mainSlice';

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoadingAction(true)); 
    getCurrentUser ()
      .then((res) => {
        if (res) {
          dispatch(userAction(res));
          dispatch(logInAction(true));
        } else {
          dispatch(userAction({}));
          dispatch(logInAction(false));
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => dispatch(isLoadingAction(false)));
  }, [dispatch]); 

  return <>{children}</>; 
};

export default UserProvider;