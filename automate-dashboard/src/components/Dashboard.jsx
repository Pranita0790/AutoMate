import { Users, Car, CheckCircle, Clock, MapPin, RefreshCw, Maximize2, Download } from 'lucide-react';
import MetricCard from './MetricCard';

const Dashboard = () => {
  const metrics = [
    {
      icon: Users,
      title: 'Active Users',
      value: '1,248',
      change: '12%',
      changeType: 'positive',
      period: 'from last month',
      iconBg: 'bg-primary-500'
    },
    {
      icon: Car,
      title: 'Active Drivers',
      value: '145',
      change: '8%',
      changeType: 'positive',
      period: 'from last month',
      iconBg: 'bg-primary-500'
    },
    {
      icon: CheckCircle,
      title: 'Completed Rides',
      value: '8,492',
      change: '23%',
      changeType: 'positive',
      period: 'from last month',
      iconBg: 'bg-gray-800'
    },
    {
      icon: Clock,
      title: 'Ongoing Rides',
      value: '64',
      change: '5%',
      changeType: 'negative',
      period: 'from last hour',
      iconBg: 'bg-red-500'
    }
  ];

  const systemStatus = [
    { service: 'API Server', status: 'Operational', color: 'bg-green-500' },
    { service: 'Database', status: 'Operational', color: 'bg-green-500' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Welcome Section */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your campus rides today.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
          <Download className="w-4 h-4" />
          Download Report
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Live Driver Locations and System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Driver Locations */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Live Driver Locations</h2>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700" />
                <Maximize2 className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Map view would be displayed here</p>
                <p className="text-sm text-gray-400">Live tracking of all active drivers</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">System Status</h2>
            
            <div className="space-y-4">
              {systemStatus.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-gray-700">{item.service}</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">{item.status}</span>
                </div>
              ))}
            </div>

            {/* Additional Status Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                <p className="text-xs text-gray-400">2 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;