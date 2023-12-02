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
      <div className={`fixed top-0 left-0 right-0 flex items-center p-3 bg-white shadow-md ${isMenuOpen ? 'md:pl-0' : 'md:pl-54'}`}>
        <button
          onClick={toggleMenu}
          data-drawer-target="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center justify-center p-2 mr-4 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <MenuSharpIcon className="w-6 h-6 text-gray-900" />
        </button>

        <div className="flex-1"> {/* 修正：フレックス設定の調整 */}
          <input
            type="search"
            className="w-full p-2 text-sm text-gray-700 bg-gray-200 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Search..."
          />
        </div>
      </div>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-54 h-screen transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} // 修正：バーガーメニューの幅を固定
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
