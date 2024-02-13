"use client";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [cursorX, setCursorX] = useState<number>();
  const [cursorY, setCursorY] = useState<number>();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    });
  }, [cursorX, cursorY]);

  return (
    <div
      style={{
        left: cursorX + "px",
        top: cursorY + "px",
      }}
      id="cursor"
      className="z-10 lg:block"
    ></div>
  );
};

export default Cursor;
