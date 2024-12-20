Chat Message Component with Gemini Ai
This is a React component for displaying chat messages with different styles for user and assistant roles. It uses the lucide-react library for icons, Tailwind CSS for styling, and Gemini Ai for generating responses.

https://clongemini.netlify.app/
Features
Displays messages from both user and assistant roles.

Uses different styles for user and assistant messages.

Shows user avatar for user messages and a bot icon for assistant messages.

Generates responses using Gemini Ai.

Installation
Clone the repository:

bash

Copy
git clone [https://github.com/irmak148/Gemini Ai-style-1](https://github.com/irmak148/Gemini-style-1.git)
Install the dependencies:

bash

Copy
npm install
Create a .env file in the root of your project and add your Gemini Ai API key:

env

Copy
VITE_Gemini Ai_API_KEY=your_api_key_here
Start the development server:

bash

Copy
npm start
Usage
Import the ChatMessage component and the generateGemini AiResponse function into your project:

javascript

Copy
import { ChatMessage } from './path/to/ChatMessage';
import { generateGemini AiResponse } from './path/to/api';
Use the ChatMessage component in your JSX and generate responses using the generateGemini AiResponse function:

javascript

Copy
import React, { useState } from 'react';
import { ChatMessage } from './path/to/ChatMessage';
import { generateGemini AiResponse } from './path/to/api';

const messages = [
  { role: 'user', content: 'Hello!', userAvatar: 'path/to/userAvatar.png' },
  { role: 'assistant', content: 'Hi there!' },
];

function App() {
  const [chatMessages, setChatMessages] = useState(messages);

  const handleSend = async (prompt) => {
    const response = await generateGemini AiResponse(prompt);
    setChatMessages([...chatMessages, { role: 'assistant', content: response }]);
  };

  return (
    <div>
      {chatMessages.map((message, index) => (
        <ChatMessage key={index} message={message} userAvatar={message.userAvatar} />
      ))}
      <button onClick={() => handleSend('Your prompt here')}>Send</button>
    </div>
  );
}

export default App;
Code Overview
Components
ChatMessage: The main component that displays a chat message with different styles for user and assistant roles.

Functions
generateGemini AiResponse: A function that generates responses using Gemini Ai.

Props
message: An object containing the message content and role (user or assistant).

userAvatar: A string representing the URL of the user's avatar image.

Example Code
javascript

Copy
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
javascript

Copy
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_Gemini Ai_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateGemini AiResponse(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'Gemini Ai-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Failed to generate response');
  }
}#   G e m i n i - s t y l e - 1 
 
 