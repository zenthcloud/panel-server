/**
 * ==============================================================
 * Project     : Zenth Cloud – Zenth Panel
 * File        : App.tsx
 * Version     : 1.0.0
 * Description : Client Main Application
 * Author      : Sky Genesis Enterprise
 * Created on  : 2025-07-19
 * License     : AGPLv3
 * Forked from : N/A
 * Modified by : Liam Dispa <liam.dispa@skygenesisenterprise.com> (2025-08-09)
 * ==============================================================
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
// import Registar from './pages/auth/Registar';
// import Dashboard from './pages/client/Dashboard';
// import Domains from './pages/client/Domains';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirige la racine vers /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route path="/login" element={<Login />} />

        {/* Redirige toute autre route vers /login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
