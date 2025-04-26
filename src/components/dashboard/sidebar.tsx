import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { DollarSign, ChartBar, Calendar, PlusCircle, HeartPulse, User } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      name: 'Dashboard', 
      path: '/', 
      icon: <ChartBar className="h-5 w-5" /> 
    },
    { 
      name: 'Expenses', 
      path: '/expenses', 
      icon: <DollarSign className="h-5 w-5" /> 
    },
    { 
      name: 'Income', 
      path: '/income', 
      icon: <PlusCircle className="h-5 w-5" /> 
    },
    { 
      name: 'Medications', 
      path: '/medications', 
      icon: <HeartPulse className="h-5 w-5" /> 
    },
    { 
      name: 'Calendar', 
      path: '/calendar', 
      icon: <Calendar className="h-5 w-5" /> 
    },
    { 
      name: 'Profile', 
      path: '/profile', 
      icon: <User className="h-5 w-5" /> 
    }
  ];

  return (
    <aside className="bg-white dark:bg-mindful-900 w-full md:w-64 border-r flex flex-col h-auto md:h-screen md:sticky top-0">
      <div className="p-4 border-b flex items-center justify-center md:justify-start">
        <HeartPulse className="h-8 w-8 text-mindful-400" />
        <h1 className="ml-2 text-xl font-bold text-mindful-700 dark:text-mindful-300">
          <span className="text-teal-600">Mindful</span>Wallet
        </h1>
      </div>
      <nav className="flex md:flex-col p-2 md:p-4 overflow-auto md:space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-mindful-100 dark:hover:bg-mindful-800",
              location.pathname === item.path ? "bg-mindful-100 text-mindful-600 dark:bg-mindful-800 dark:text-mindful-200" : "text-gray-600 dark:text-gray-400"
            )}
          >
            {item.icon}
            <span className="hidden md:block">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
