'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const router = useRouter();
  const activePage = router.pathname;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handlePageChange = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="grid grid-cols-2 place-items-center text-xl font-medium text-slate-200 pt-3 shadow-2xl pb-1 bg-purple-500">
        <h1 className="pr-12">Your To-Do List</h1>
        <div className="flex pr-10">
          <div className="hidden md:flex">
            <a
              className={`mr-10 cursor-pointer hover:text-zinc-950 transition-colors ${
                activePage === '/' ? 'border-b-2 border-zinc-500' : ''
              }`}
              onClick={() => handlePageChange('/')}
            >
              Main
            </a>
            <a
              className={`mr-10 cursor-pointer hover:text-zinc-950 transition-colors ${
                activePage === '/list/task' ? 'border-b-2 border-zinc-500' : ''
              }`}
              onClick={() => handlePageChange('/list/task')}
            >
              TaskList
            </a>
            <a
              className={`cursor-pointer hover:text-zinc-950 transition-colors ${
                activePage === '/list/done' ? 'border-b-2 border-zinc-500' : ''
              }`}
              onClick={() => handlePageChange('/list/done')}
            >
              Done
            </a>
          </div>
          <div className="md:hidden">
            {isMenuOpen ? (
              <div className="fixed inset-0 bg-slate-50 z-50 flex flex-col">
                <div className="flex justify-end p-4">
                  <a
                    className="cursor-pointer text-2xl text-red-500 hover:text-red-700 transition-colors"
                    onClick={toggleMenu}
                  >
                    <RiCloseLine />
                  </a>
                </div>
                <div className='flex flex-col justify-center items-center'> 
                  <a
                    className="cursor-pointer text-2xl mb-4 text-violet-400 hover:text-slate-400 transition-colors"
                    onClick={() => handlePageChange('/')}
                  >
                    Main
                  </a>
                  <a
                    className="cursor-pointer text-2xl mb-4 text-violet-400 hover:text-slate-400 transition-colors"
                    onClick={() => handlePageChange('/list/task')}
                  >
                    TaskList
                  </a>
                  <a
                    className="cursor-pointer text-2xl text-violet-400 hover:text-slate-400 transition-colors"
                    onClick={() => handlePageChange('/list/done')}
                  >
                    Done
                  </a>
                </div>
                
              </div>
            ) : (
              <RiMenu2Line
                className="text-slate-50 text-2xl font-bold cursor-pointer ml-20 hover:text-slate-400 transition-colors"
                size={24}
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;