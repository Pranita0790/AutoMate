import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import DriverManagement from './components/DriverManagement';
import './App.css';

function App() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main Dashboard Content */}
        <main className="flex-1">
          {activeItem === 'dashboard' && <Dashboard />}
          {activeItem === 'driver-management' && <DriverManagement />}
          {/* Other pages would be rendered here based on activeItem */}
        </main>
      </div>
    </div>
  );
}

export default App;
