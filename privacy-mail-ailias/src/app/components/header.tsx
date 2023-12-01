import Link from 'next/link'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Menu } from '@mui/material';
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';

export default function Header() {
  return(
    <>

    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-400 dark:focus:ring-gray-600">
     <MenuSharpIcon className="w-6 h-6 text-gray-900"/> 
    </button>

    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-green-900">
        <ul className="space-y-2 font-">
          <li>
            <div className='font-bold text-lg'>
              <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Privateco Mail Aliases</span>
              </Link>
            </div>
          </li>
		  <li>
            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 group">
              <DashboardSharpIcon className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"/>
              <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 group">
              <AlternateEmailSharpIcon className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"/>
              <span className="flex-1 ms-3 whitespace-nowrap">Aliases</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 group">
              <SettingsSharpIcon className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white-900 dark:group-hover:text-white"/>
              <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </Link>
          </li>
		  <li>
            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 group">
              <CreditCardSharpIcon className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white-900 dark:group-hover:text-white"/>
              <span className="flex-1 ms-3 whitespace-nowrap">Subscription</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
    </>
  );
}
