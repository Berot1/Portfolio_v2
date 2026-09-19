"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HyperText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iterations) return text[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <motion.span className={className}>{displayText}</motion.span>;
}