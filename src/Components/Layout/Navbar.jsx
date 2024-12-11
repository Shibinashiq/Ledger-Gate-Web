import React from 'react';
import { Bell, Search } from 'lucide-react';
import logo from '../../assets/ledgergate-Logo.png';
// src\assets
const Navbar = () => {
  return (
    <nav className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm ">
      <a href="/" className="flex items-center gap-2">
      <img
            src={logo}
            alt="LedgerGate Logo"
            className="h-auto w-[150px] ml-2"
        />

        {/* <span className="text-xl font-bold text-[#FF6B4E]">LEDGERGATE</span> */}
      </a>

      <div className="flex w-full max-w-xl items-center px-4">
        <div className="relative w-full">
          <Search className="absolute right-3   top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search Subject, Topic..."
            className="w-full rounded-full shadow-sm  border bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-gray-300"
          />
        </div>
      </div>
      {/* <Bell size={20} strokeWidth={0.5} /> */}

      <div className="flex items-center gap-4">
        <button className="relative  shadow-sm p-2 rounded-full border bg-white hover:bg-gray-100 focus:border-gray-300">
          <Bell className="h-5 w-5 text-gray-600" />
          {/* <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" /> */}
        </button>
        <div className="flex items-center gap-2 border rounded-full">
            <div className="h-9 w-9 rounded-full border  flex items-center justify-center">
                <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                </svg>
            </div>

          <div className="hidden sm:block">
            <div className="text-sm font-medium">Althaf</div>
            <div className="text-xs text-gray-500">althaf544@gmail.com</div>
          </div>
          <button className="rounded p-1 hover:bg-gray-100">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

