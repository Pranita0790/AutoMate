import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricCard = ({ icon: Icon, title, value, change, changeType, period, iconBg }) => {
  const isPositive = changeType === 'positive';
  
  return (
    <div className="metric-card">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBg}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
      </div>
      
      {change && (
        <div className="mt-4 flex items-center gap-2">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {change}
          </span>
          <span className="text-sm text-gray-500">{period}</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;