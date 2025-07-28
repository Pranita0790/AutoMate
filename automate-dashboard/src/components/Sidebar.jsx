import { 
  LayoutDashboard, 
  Users, 
  Car, 
  MapPin, 
  FileText, 
  DollarSign, 
  BarChart3, 
  User,
  TrendingUp,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = ({ activeItem, onItemClick }) => {
  const [expandedItems, setExpandedItems] = useState({ drivers: true });

  const toggleExpanded = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard'
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      path: '/users'
    },
    {
      id: 'drivers',
      label: 'Drivers',
      icon: Car,
      hasSubmenu: true,
      children: [
        { id: 'driver-management', label: 'Driver Management', path: '/drivers/management' },
        { id: 'seat-availability', label: 'Seat Availability', path: '/drivers/seats' },
        { id: 'driver-locations', label: 'Driver Locations', path: '/drivers/locations' },
        { id: 'driver-documents', label: 'Driver Documents', path: '/drivers/documents' },
        { id: 'revenue-generated', label: 'Revenue Generated', path: '/drivers/revenue' },
        { id: 'driver-analytics', label: 'Driver Analytics', path: '/drivers/analytics' },
        { id: 'driver-details', label: 'Driver Details', path: '/drivers/details' },
        { id: 'performance-metrics', label: 'Performance Metrics', path: '/drivers/performance' }
      ]
    }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AutoMate</h1>
            <p className="text-xs text-gray-500">Your Campus, Your Ride</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <div key={item.id}>
            <div
              className={`sidebar-item cursor-pointer ${
                activeItem === item.id ? 'active' : ''
              }`}
              onClick={() => {
                if (item.hasSubmenu) {
                  toggleExpanded(item.id);
                } else {
                  onItemClick(item.id);
                }
              }}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1">{item.label}</span>
              {item.hasSubmenu && (
                expandedItems[item.id] ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
              )}
            </div>
            
            {/* Submenu */}
            {item.hasSubmenu && expandedItems[item.id] && (
              <div className="ml-8 mt-2 space-y-1">
                {item.children.map((child) => (
                  <div
                    key={child.id}
                    className={`sidebar-item cursor-pointer text-sm ${
                      activeItem === child.id ? 'active' : ''
                    }`}
                    onClick={() => onItemClick(child.id)}
                  >
                    <span>{child.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;