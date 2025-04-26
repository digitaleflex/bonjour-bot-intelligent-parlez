import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { generateResponse } from '../utils/chatUtils';

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour ! Je suis votre assistant. Comment puis-je vous aider aujourd'hui ?", isBot: true }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = async (userMessage: string) => {
    setIsLoading(true);
    // Simuler un délai de réponse naturel
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500));
    
    const response = generateResponse(userMessage);
    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setIsLoading(false);
  };

  const handleSendMessage = async (message: string) => {
    setMessages(prev => [...prev, { text: message, isBot: false }]);
    await simulateResponse(message);
  };

  return (
    <div className="max-w-2xl mx-auto h-[80vh] flex flex-col bg-background border rounded-lg shadow-sm">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default Chatbot;
