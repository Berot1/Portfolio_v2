"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: "Hi! I'm Gil's AI assistant. Ask me anything about his projects or experience!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
        body: JSON.stringify({ messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })) }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.content }]);
    } catch (error) {
      console.error("Chat Error:", error); // Fixed unused 'error' variable
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-80 md:w-96 h-[500px] rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-lg animate-pulse" />
              <span className="font-bold text-sm dark:text-white">Chat with Gil</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  m.role === 'user' 
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black' 
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200'
                }`}>
                  {/* Fixed TypeScript and 'node' linting errors here */}
                  <div className="space-y-2">
                    <ReactMarkdown 
                      components={{
                        p: ({ ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                        ul: ({ ...props }) => <ul className="list-disc ml-4 space-y-1" {...props} />,
                        ol: ({ ...props }) => <ol className="list-decimal ml-4 space-y-1" {...props} />,
                        li: ({ ...props }) => <li className="pl-1" {...props} />,
                        strong: ({ ...props }) => <strong className="font-bold" {...props} />,
                        em: ({ ...props }) => <em className="italic" {...props} />
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
                  <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-zinc-50 dark:bg-zinc-800 border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-zinc-400 dark:text-white outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group bg-zinc-900 text-white dark:bg-white dark:text-black px-5 py-3 rounded-md font-bold text-sm flex items-center gap-2 shadow-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
        >
          <MessageSquare 
            className="w-4 h-4 fill-current transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" 
          />
          Chat with Gil
        </button>
      )}
    </div>
  );
}