import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineSlack,AiTwotoneSnippets, AiOutlineCaretDown, AiFillThunderbolt } from 'react-icons/ai';

const Sidebar = ({ children }) => {
  const [showSettingsSubmenu, setShowSettingsSubmenu] = React.useState(false);
  const [showPayrollSubmenu, setShowPayrollSubmenu] = useState(false);
  const [showReportSubmenu, setShowReportSubmenu] = useState(false);

  return (
    <div className='flex'>
      <div className='fixed w-20 md:w-60 h-screen p-2 bg-[#000] text-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center md:items-start'>
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <div className="md:flex space-x-1">
                <RxSketchLogo size={20} /> <span className="text-xs font-bold">HRM PAYROLL</span>
              </div>
             
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'  className=' hover:bg-green-500 cursor-pointer rounded-lg w-full'>
            <div className='  cursor-pointer my-2 p-1 rounded-lg inline-block'>
            <div className="md:flex space-x-1">
              <RxDashboard size={20} /> <span className="text-sm font-bold hidden md:inline-block">Dashboard</span>
              </div>
            </div>
          </Link>
          <Link href='/customers' className=' hover:bg-green-500 cursor-pointer rounded-lg w-full'>
            <div className='  cursor-pointer my-2 p-1 rounded-lg inline-block'>
            <div className="md:flex space-x-1">
              <RxPerson size={20} /> <span className="text-sm font-bold hidden md:inline-block">Employees</span>
            </div>
            </div>
          </Link>
          <Link href='/orders'  className=' hover:bg-green-500 cursor-pointer rounded-lg w-full'>
            <div className=' cursor-pointer my-2 p-1 rounded-lg inline-block'>
            <div className="md:flex space-x-1">
              <HiOutlineShoppingBag size={20} /> <span className="text-sm font-bold hidden md:inline-block">Dashboard</span>
            </div>
            </div>
          </Link>

          <div className="w-full -my-2"  onClick={() => setShowSettingsSubmenu(!showSettingsSubmenu)} >
              <div className='hover:bg-green-500 cursor-pointer rounded-lg w-full '>
                <div className='flex cursor-pointer my-2 px-1 py-3 rounded-lg justify-between'>
                <div className="md:flex space-x-1">
                  <FiSettings size={20} /> <span className="text-sm font-bold hidden md:inline-block">Settings</span>
                  </div>
                  <AiOutlineCaretDown className=''/>
                </div>
              </div>

                <div className="hover:bg-none">
                  {showSettingsSubmenu && (
                  <div className="submenu  ml-3">
                    <Link href='/' className="flex space-x-1 p-2 hover:bg-green-500 cursor-pointer rounded-lg w-full">
                      <AiFillThunderbolt className='text-lg'/> <span className='text-sm font-bold'>SubMenu</span>
                      </Link>
                    <Link href='/' className="flex space-x-1 p-2 hover:bg-green-500 cursor-pointer rounded-lg w-full">
                      <AiFillThunderbolt className='text-lg'/> <span className='text-sm font-bold'>SubMenu</span>
                      </Link>
                  </div>
                )}
              </div>
          
          </div>

          <div className="w-full -my-2"  onClick={() => setShowPayrollSubmenu(!showPayrollSubmenu)} >
              <div className='hover:bg-green-500 cursor-pointer rounded-lg w-full '>
                <div className='flex cursor-pointer my-2 px-1 py-3 rounded-lg justify-between'>
                <div className="md:flex space-x-1">
                  <AiOutlineSlack size={20} /> <span className="text-sm font-bold hidden md:inline-block">Payroll</span>
                  </div>
                  <AiOutlineCaretDown className=''/>
                </div>
              </div>

                <div className="hover:bg-none">
                  {showPayrollSubmenu && (
                  <div className="submenu  ml-3">
                    <Link href='/' className="flex space-x-1 p-2 hover:bg-green-500 cursor-pointer rounded-lg w-full">
                      <AiFillThunderbolt className='text-lg'/> <span className='text-sm font-bold'>SubMenu</span>
                      </Link>
                    <Link href='/' className="flex space-x-1 p-2 hover:bg-green-500 cursor-pointer rounded-lg w-full">
                      <AiFillThunderbolt className='text-lg'/> <span className='text-sm font-bold'>SubMenu</span>
                      </Link>
                  </div>
                )}
              </div>
          
          </div>


          <div className="w-full -my-2"  onClick={() => setShowReportSubmenu(!showReportSubmenu)} >
              <div className='hover:bg-green-500 cursor-pointer rounded-lg w-full '>
                <div className='flex cursor-pointer my-2 px-1 py-3 rounded-lg justify-between'>
                <div className="md:flex space-x-1">
                  <AiTwotoneSnippets size={20} /> <span className="text-sm font-bold hidden md:inline-block">Reports</span>
                  </div>
                  <AiOutlineCaretDown className=''/>
                </div>
              </div>

                <div className="hover:bg-none">
                  {showReportSubmenu && (
                  <div className="submenu  ml-3">
                    <Link href='/' className="flex space-x-1 p-2 hover:bg-green-500 cursor-pointer rounded-lg w-full">
                      <AiFillThunderbolt className='text-lg'/> <span className='text-sm font-bold'>SubMenu</span>
                      </Link>
                    <Link href='/' className="flex space-x-1 p-2 hover:bg-green-500 cursor-pointer rounded-lg w-full">
                      <AiFillThunderbolt className='text-lg'/> <span className='text-sm font-bold'>SubMenu</span>
                      </Link>
                  </div>
                )}
              </div>
          
          </div>

          
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
