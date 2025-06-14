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
  
  if (userType && currentUser.userType !== userType) {
    // Redirect Kader users trying to access Ortu routes and vice versa
    return <Navigate to={`/dashboard-${currentUser.userType.toLowerCase()}`} replace />;
  }
  
  return children ? children : <Outlet />;
};