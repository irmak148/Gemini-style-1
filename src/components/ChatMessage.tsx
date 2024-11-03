import React from 'react';
import { Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMessageProps {
  message: Message;
  userAvatar: string;
}

export function ChatMessage({ message, userAvatar }: ChatMessageProps) {
  return (
    <div
      className={`flex items-start space-x-4 mb-6 ${
        message.role === 'assistant' ? 'justify-start' : 'justify-end'
      }`}
    >
      {message.role === 'assistant' && (
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
          <Bot className="w-6 h-6 text-indigo-600" />
        </div>
      )}
      <div className={`max-w-[70%] rounded-2xl p-4 ${
        message.role === 'assistant' 
          ? 'bg-white border border-gray-100' 
          : 'bg-indigo-600 text-white'
      }`}>
        {message.content}
      </div>
      {message.role === 'user' && (
        <img 
          src={userAvatar} 
          alt="User" 
          className="w-10 h-10 rounded-full border-2 border-indigo-100"
        />
      )}
    </div>
  );
}