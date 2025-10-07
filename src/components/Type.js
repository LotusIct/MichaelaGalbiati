import React, { useState, useEffect } from "react";

export default function TypingText({ text = "", speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return; // garante que text não seja undefined

    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => text.slice(0, index + 1)); // garante substring correta
        index++;
      } else {
        clearInterval(interval); // para quando terminar
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h2>
      {displayedText}
      <span className="cursor">|</span>
    </h2>
  );
}
