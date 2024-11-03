import React from 'react';
import { Compass, Lightbulb, MessageSquare, Code } from 'lucide-react';

const suggestions = [
  { text: "Tell me about interesting places to visit in Tokyo", icon: Compass },
  { text: "Explain quantum computing in simple terms", icon: Lightbulb },
  { text: "Suggest creative team building activities", icon: MessageSquare },
  { text: "What are the key features of React 18?", icon: Code }
];

export function Greeting() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 greeting">
        <h1 className="text-4xl font-bold text-gray-900 ">Hello, Dev.</h1>
        <p className="text-xl text-gray-600">How can I help you today?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((item, index) => (
          <button
            key={index}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-left group"
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                <item.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}