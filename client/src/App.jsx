import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';
import Computers from './pages/Computers';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/reports" element={<Reports />} />
        {/* Page not found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
