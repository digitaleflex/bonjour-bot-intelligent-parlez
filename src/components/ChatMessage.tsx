
import React from 'react';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage = ({ message, isBot }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex items-start gap-3 p-4",
      isBot ? "bg-secondary/50" : ""
    )}>
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center",
        isBot ? "bg-primary text-primary-foreground" : "bg-blue-500 text-white"
      )}>
        {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      <div className="flex-1">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
