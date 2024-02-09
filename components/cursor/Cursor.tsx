"use client";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });

    // cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      });
    };
  }, []); // empty dependency array ensures this effect runs only once on mount

  return <div className="cursor"></div>;
};

export default Cursor;
