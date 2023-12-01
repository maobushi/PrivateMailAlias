"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ウィンドウサイズが変更された際のリセット
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        onClick={toggleMenu}
        data-drawer-target="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-400 dark:focus:ring-gray-600 md:hidden"
      >
        <MenuSharpIcon className="w-6 h-6 text-gray-900" />
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-25 h-screen transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <Link href="#" className={`flex ${isMenuOpen ? 'items-center' : 'flex-col items-center justify-center'} p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 group md:flex-col md:items-center md:justify-center`}>
                <DashboardSharpIcon className="flex-shrink-0 w-8 h-8 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="p-2 whitespace-nowrap text-xs">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="aliases" className={`flex ${isMenuOpen ? 'items-center' : 'flex-col items-center justify-center'} p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 group md:flex-col md:items-center md:justify-center`}>
                <AlternateEmailSharpIcon className="flex-shrink-0 w-8 h-8 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className=" p-2 whitespace-nowrap text-xs">Aliases</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className={`flex ${isMenuOpen ? 'items-center' : 'flex-col items-center justify-center'} p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 group md:flex-col md:items-center md:justify-center`}>
                <SettingsSharpIcon className="flex-shrink-0 w-8 h-8 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="p-2 whitespace-nowrap text-xs">Settings</span>
              </Link>
            </li>
            <li>
              <Link href="subscription" className={`flex ${isMenuOpen ? 'items-center' : 'flex-col items-center justify-center'} p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 group md:flex-col md:items-center md:justify-center`}>
                <CreditCardSharpIcon className="flex-shrink-0 w-8 h-8 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="p-2 whitespace-nowrap text-xs">Subscription</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
