import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ 
  userType, // 'Kader' or 'Ortu' or null (for any authenticated user)
  redirectPath = '/pilihan-login',
  children 
}) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  }

  if (
    userType &&
    currentUser.userType?.toLowerCase() !== userType.toLowerCase()
  ) {
    return <Navigate to={`/dashboard-${currentUser.userType?.toLowerCase()}`} replace />;
  }

  return children ? children : <Outlet />;
};
