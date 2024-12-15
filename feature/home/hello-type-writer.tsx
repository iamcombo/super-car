"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export const HelloTypeWriter = () => {
  const [text] = useTypewriter({
    words: ["Hey, I'm Piset 👋"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <p className="text-3xl font-black sm:text-5xl">
      {text}
      <Cursor cursorColor="#F7AB0A" />
    </p>
  );
};
