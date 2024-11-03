import React from 'react';
import Logo from '../Assets/logo.svg'

interface HeaderProps {
  userAvatar: string;
}

export function Header({ userAvatar }: HeaderProps) {
  return (
    <header className="px-6 py-4 border-b bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 brand"><img src={Logo} alt="" /></div>
        <img 
          src={userAvatar} 
          alt="Profile" 
          className="w-10 h-10 rounded-full border-2 border-indigo-100"
        />
      </div>
    </header>
  );
}