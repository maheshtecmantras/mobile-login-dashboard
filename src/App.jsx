import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProtectedRoute from './router/ProtectedRoute.jsx';
export default function App() { return <Routes><Route path="/login" element={<LoginPage />} /><Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} /><Route path="*" element={<Navigate to="/login" replace />} /></Routes>; }
