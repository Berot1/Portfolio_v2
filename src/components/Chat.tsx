"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MoreHorizontal, SquarePen, ChevronUp, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  
  // Initial message is personal, in the first person
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: "Hey! 👋 Thanks for stopping by. I'm Gil. Feel free to ask me anything about my projects, skills, or what I've been working on lately. How can I help you?" }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })) 
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.content }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I'm having a bit of trouble connecting right now. Feel free to reach out via my contact page!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Functionality for the header buttons
  const handleResetChat = () => {
    setMessages([{ role: 'ai', content: "Conversation reset. What else would you like to know about my work?" }]);
  };

  const handleCopyEmail = () => {
    // Replace with your actual email
    navigator.clipboard.writeText("mgilbernard@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div className="fixed bottom-0 right-6 z-[60]">
      {isOpen ? (
        // Expanded Chat Window
        <div className="bg-white dark:bg-zinc-900 border-x border-t border-zinc-200 dark:border-zinc-800 w-80 md:w-96 h-[500px] rounded-t-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2.5 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <Image src="/image/profile.jpg" alt="Profile" width={32} height={32} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-600 rounded-full border-2 border-white dark:border-zinc-900" />
              </div>
              <span className="font-semibold text-[15px] text-zinc-900 dark:text-white">Messaging</span>
            </div>
            
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <button onClick={handleCopyEmail} title="Copy Email" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-1 rounded-sm transition-colors">
                <MoreHorizontal className="w-5 h-5 cursor-pointer hover:text-black dark:hover:text-white" />
              </button>
              <button onClick={handleResetChat} title="New Chat" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-1 rounded-sm transition-colors">
                <SquarePen className="w-5 h-5 cursor-pointer hover:text-black dark:hover:text-white" />
              </button>
              <button onClick={() => setIsOpen(false)}>
                <ChevronUp className="w-5 h-5 cursor-pointer hover:text-black dark:hover:text-white" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-zinc-950">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-zinc-900 text-white' 
                    : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200'
                }`}>
                  <ReactMarkdown 
                    components={{ 
                      p: ({ ...props }) => <p className="mb-1 last:mb-0" {...props} /> 
                    }}
                  >
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg"><Loader2 className="w-4 h-4 animate-spin text-zinc-500" /></div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message..." 
                className="flex-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded px-3 py-2 text-sm outline-none focus:border-zinc-500 dark:text-white dark:placeholder-zinc-400"
              />
              <button onClick={handleSend} disabled={isLoading} className="p-2 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors disabled:opacity-50">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Minimized Bar
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-3 py-2 rounded-t-lg shadow-lg flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
        >
          <div className="relative">
            <div className="w-6 h-6 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
              <Image src="/image/profile.jpg" alt="Profile" width={24} height={24} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-600 rounded-full border border-white dark:border-zinc-900" />
          </div>
          <span className="font-semibold text-sm text-zinc-900 dark:text-white">Messaging</span>
          <ChevronUp className="w-4 h-4 text-zinc-500 dark:text-zinc-400 ml-2" />
        </button>
      )}
    </div>
  );
}