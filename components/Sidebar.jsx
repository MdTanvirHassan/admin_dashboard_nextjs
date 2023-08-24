import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineSlack,AiTwotoneSnippets, AiOutlineCaretDown } from 'react-icons/ai';

const Sidebar = ({ children }) => {
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
            <div className=' hover:bg-gray-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
            <div className="md:flex space-x-1">
              <HiOutlineShoppingBag size={20} /> <span className="text-sm font-bold hidden md:inline-block">Dashboard</span>
            </div>
            </div>
          </Link>
          <Link href='/'  className='hover:bg-green-500 cursor-pointer rounded-lg w-full'>
            <div className='  cursor-pointer my-2 p-1 rounded-lg inline-block'>
            <div className="md:flex space-x-1">
              <FiSettings size={20} /> <span className="text-sm font-bold hidden md:inline-block">Settings</span>
              </div>
            </div>
          </Link>
          <Link href='/'  className='hover:bg-green-500 cursor-pointer rounded-lg w-full'>
            <div className=' flex cursor-pointer my-2 p-1 rounded-lg justify-between'>
            <div className="md:flex space-x-1">
              <AiOutlineSlack size={20} /> <span className="text-sm font-bold hidden md:inline-block">Payroll</span>
              </div>
              <AiOutlineCaretDown className=''/>
            </div>
          
          </Link>
          {/* <div className="flex">
              <AiOutlineSlack size={20} /> <span className="text-sm font-bold hidden md:inline-block">Payroll</span>
              </div> */}
          <Link href='/'  className='hover:bg-green-500 cursor-pointer rounded-lg w-full'>
            <div className='  cursor-pointer my-2 p-1 rounded-lg flex justify-between'>
            <div className="md:flex space-x-1">
              <AiTwotoneSnippets size={20} /> <span className="text-sm font-bold hidden md:inline-block">Reports</span>
              </div>
              <AiOutlineCaretDown className=''/>
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
