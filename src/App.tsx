import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Greeting } from './components/Greeting';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { LoadingDots } from './components/LoadingDots';
import { generateGeminiResponse } from './services/gemini';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [userAvatar, setUserAvatar] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setUserAvatar(data.results[0].picture.medium))
      .catch(err => console.error('Error fetching avatar:', err));
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    setShowGreeting(false);
    setError(null);
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const response = await generateGeminiResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header userAvatar={userAvatar} />

      <div className="flex-1 overflow-auto px-6 py-4">
        <div className="max-w-6xl mx-auto">
          {showGreeting && <Greeting />}

          {messages.map((message, index) => (
            <ChatMessage 
              key={index}
              message={message}
              userAvatar={userAvatar}
            />
          ))}
          
          {loading && (
            <div className="flex justify-start mb-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-4">
                <LoadingDots />
              </div>
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}
        </div>
      </div>

      <ChatInput 
        input={input}
        setInput={setInput}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;