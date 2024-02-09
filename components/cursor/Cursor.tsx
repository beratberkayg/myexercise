"use client";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [cursorX, setCursorX] = useState<number>();
  const [cursorY, setCursorY] = useState<number>();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });
  }, [cursorX, cursorY]);

  return (
    <div
      style={{
        left: cursorX + "px",
        top: cursorY + "px",
      }}
      id="cursor"
      className="hidden lg:block "
    ></div>
  );
};

export default Cursor;
