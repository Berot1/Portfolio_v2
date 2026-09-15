// components/Terminal.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

const facts = [
  "the first computer bug was an actual real-life moth found in a Harvard Mark II computer in 1947.",
  "there are more ways to arrange a standard deck of cards than there are atoms on Earth. (combinatorics is wild).",
  "the Apollo 11 guidance computer had less processing power than a standard USB-C charger.",
  "in C++, arrays start at 0 because the index represents the memory offset from the starting element.",
];

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { 
      command: "", 
      output: (
        <div className="text-zinc-500 space-y-1">
          <p>Gil_OS educational sandbox initialized.</p>
          <p>purpose: learn about embedded systems, edge ai, and web tech.</p>
          <p>type <span className="text-zinc-300 font-semibold">&apos;help&apos;</span> to see available modules.</p>
        </div>
      ) 
    }
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragControls = useDragControls();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      const lowerCmd = cmd.toLowerCase();
      let output: React.ReactNode = "";

      // Educational Logic Tree
      if (lowerCmd.startsWith("learn ")) {
        const topic = lowerCmd.split(" ")[1];
        switch (topic) {
          case "mqtt":
            output = "MQTT (Message Queuing Telemetry Transport): a super lightweight messaging protocol. perfect for IoT because it barely uses any bandwidth. devices 'publish' data to a broker, and others 'subscribe' to get it.";
            break;
          case "edge-ai":
            output = "Edge AI: instead of sending data to a massive cloud server to be processed, we run the machine learning models directly on the local hardware (like a microcontroller). lower latency, better privacy, zero internet required.";
            break;
          case "rag":
            output = "RAG (Retrieval-Augmented Generation): giving an AI an open-book test. instead of relying purely on what it memorized during training, it actively searches a database for actual documents to ground its answers in reality.";
            break;
          case "spiffs":
            output = "SPIFFS (SPI Flash File System): a tiny file system designed specifically for the flash chips on microcontrollers like the ESP32. lets us store config files and web server assets directly on the board.";
            break;
          default:
            output = `no module found for '${topic}'. try: mqtt, edge-ai, rag, spiffs.`;
        }
      } else if (lowerCmd.startsWith("simulate ")) {
        const device = lowerCmd.split(" ")[1];
        if (device === "esp32") {
          output = (
            <div className="font-mono text-zinc-400 space-y-1">
              <p className="text-zinc-500">starting fake boot sequence...</p>
              <p>[ 10ms] boot: ESP32-S3 rev v0.1</p>
              <p>[ 45ms] mount: SPIFFS initialized.</p>
              <p>[ 120ms] wifi: connecting to AP... [OK]</p>
              <p>[ 205ms] i2c: MPU6050 sensor detected at 0x68.</p>
              <p>[ 410ms] tinyml: loading TensorFlow Lite Micro model... [OK]</p>
              <p className="text-green-400">system ready. waiting for telemetry...</p>
            </div>
          );
        } else {
          output = `can't simulate '${device}'. try: 'simulate esp32'`;
        }
      } else {
        switch (lowerCmd) {
          case "help":
            output = (
              <div className="space-y-1">
                <p>available commands:</p>
                <p><span className="text-zinc-300">learn [topic]</span> - topics: mqtt, edge-ai, rag, spiffs</p>
                <p><span className="text-zinc-300">simulate [device]</span> - devices: esp32</p>
                <p><span className="text-zinc-300">fact</span> - gives you a random engineering trivia fact</p>
                <p><span className="text-zinc-300">clear</span> - wipes the screen</p>
                <p><span className="text-zinc-300">exit</span> - close the terminal</p>
              </div>
            );
            break;
          case "fact":
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            output = `did you know? ${randomFact}`;
            break;
          case "clear":
            setHistory([]);
            setInput("");
            return;
          case "exit":
          case "quit":
            onClose();
            setInput("");
            return;
          case "":
            output = "";
            break;
          default:
            output = `command not found: ${cmd}. type 'help' to see what works.`;
        }
      }

      setHistory(prev => [...prev, { command: cmd, output }]);
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
          <motion.div
            drag
            dragControls={dragControls}
            dragListener={false} 
            dragMomentum={false} 
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto w-full max-w-2xl bg-[#09090b]/95 backdrop-blur-xl border border-zinc-800/80 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono flex flex-col h-[60vh] max-h-[500px] ring-1 ring-white/5 absolute"
          >
            {/* Header / Drag Handle */}
            <div 
              className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/50 bg-zinc-950/80 cursor-grab active:cursor-grabbing touch-none"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div className="flex items-center gap-3 text-zinc-500 text-xs font-semibold uppercase tracking-widest pointer-events-none">
                <TerminalIcon className="w-4 h-4" />
                <span>sandbox@gil_os:~</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-5 overflow-y-auto text-sm text-zinc-300 space-y-4 cursor-text whitespace-pre-wrap" onClick={() => inputRef.current?.focus()}>
              {history.map((item, i) => (
                <div key={i} className="space-y-1.5">
                  {item.command && (
                    <div className="flex items-center gap-3 text-zinc-100">
                      <span className="text-zinc-500">❯</span>
                      <span className="text-zinc-200">{item.command}</span>
                    </div>
                  )}
                  {item.output && <div className="text-zinc-400 leading-relaxed pl-5">{item.output}</div>}
                </div>
              ))}

              {/* Active Input Line */}
              <div className="flex items-center gap-3 text-zinc-100 pt-2">
                <span className="text-zinc-500 animate-pulse">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent outline-none border-none text-zinc-200 caret-zinc-400 placeholder:text-zinc-700 font-medium tracking-wide"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              <div ref={bottomRef} className="h-4" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}