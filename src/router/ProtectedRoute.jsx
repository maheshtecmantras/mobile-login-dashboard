import { Navigate } from 'react-router-dom';
export default function ProtectedRoute({ children }) { return sessionStorage.getItem('loggedIn') === 'true' ? children : <Navigate to="/login" replace />; }
