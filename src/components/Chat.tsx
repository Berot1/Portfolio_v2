"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MoreHorizontal, SquarePen, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: "Hey! Thanks for stopping by. I'm Gil. Feel free to ask me anything about my projects, skills, or what I've been working on lately. How can I help you?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Changed from e.altKey to (e.ctrlKey || e.metaKey)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setHasUnread(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I'm having a bit of trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([{ role: 'ai', content: "Session reset. What else would you like to know about my work?" }]);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mgilbernard@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
          setHasUnread(false);
        }}
        className="flex items-center justify-between w-full text-[13px] font-sans text-[#8a99a8] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors group relative"
      >
        {/* whitespace-nowrap prevents the text from stacking */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span>Ask anything</span>
          {hasUnread && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shrink-0" />}
        </div>
        
        <div className="flex items-center gap-1.5 shrink-0 text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans px-1.5 py-0.5 border border-zinc-200 dark:border-zinc-700 rounded-md text-[11px] bg-white dark:bg-[#09090b] shadow-sm leading-none flex items-center justify-center min-w-[26px]">Ctrl</kbd>
          <span className="text-[10px] font-sans">+</span>
          <kbd className="font-sans px-1.5 py-0.5 border border-zinc-200 dark:border-zinc-700 rounded-md text-[11px] bg-white dark:bg-[#09090b] shadow-sm leading-none flex items-center justify-center min-w-[18px]">K</kbd>
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[100] bg-white dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 w-[340px] md:w-[380px] h-[500px] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-7 h-7 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700">
                  <Image src="/image/tabsprofile.jpg" alt="Profile" width={28} height={28} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-white dark:border-zinc-950" />
              </div>
              <span className="font-mono font-semibold text-xs text-zinc-900 dark:text-zinc-100 tracking-wider">Gil Bernard</span>
            </div>
            
            <div className="flex items-center gap-1 text-zinc-400">
              <button onClick={handleCopyEmail} title="Copy Email" className="hover:bg-zinc-200 dark:hover:bg-zinc-800 p-1.5 rounded transition-colors">
                <MoreHorizontal className="w-4 h-4 cursor-pointer hover:text-black dark:hover:text-white" />
              </button>
              <button onClick={handleResetChat} title="New Chat" className="hover:bg-zinc-200 dark:hover:bg-zinc-800 p-1.5 rounded transition-colors">
                <SquarePen className="w-4 h-4 cursor-pointer hover:text-black dark:hover:text-white" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors ml-1">
                <X className="w-4 h-4 cursor-pointer hover:text-black dark:hover:text-white" />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-[#0c0c0e] font-sans text-xs custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium' 
                    : 'bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 border border-zinc-200/60 dark:border-white/5'
                }`}>
                  <ReactMarkdown components={{ p: ({ ...props }) => <p className="mb-1 last:mb-0" {...props} /> }}>
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-zinc-400" />
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            <div className="flex items-center gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..." 
                className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-zinc-400 dark:focus:border-zinc-600 dark:text-white dark:placeholder-zinc-500 transition-colors"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading} 
                className="p-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}