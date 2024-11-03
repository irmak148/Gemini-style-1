import React from 'react';
import { Image, Mic, Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
}

export function ChatInput({ input, setInput, handleSend }: ChatInputProps) {
  return (
    <div className="border-t bg-white px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Gemini..."
            className="w-full px-4 py-3 pr-32 rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Image className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Mic className="w-5 h-5" />
            </button>
            {input.trim() && (
              <button 
                onClick={handleSend}
                className="p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                <Send className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500 text-center">
          Gemini can make mistakes, so double-check its responses
        </p>
      </div>
    </div>
  );
}