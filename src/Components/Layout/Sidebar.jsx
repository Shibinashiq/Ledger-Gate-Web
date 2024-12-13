import React from 'react';
import { Home, BarChart2, FileText } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="flex  w-24 flex-col items-center border-r bg-white py-8 ">
      <nav className="flex flex-1 flex-col items-center gap-8">
        <a 
          href="/"
          className="rounded-lg p-2 text-orange-500 transition-colors hover:bg-orange-50"
        >
          <Home className="h-6 w-6" />
        </a>

        <a 
          href="/stats"
          className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50"
        >
          <BarChart2 className="h-6 w-6" />
        </a>

        <a 
          href="/reports"
          className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50"
        >
          <FileText className="h-6 w-6" />
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

