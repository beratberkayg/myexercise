"use client";
import { useEffect, useState } from "react";
import "./module.style.css";
const Loader = () => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [pageLoading]);

  return (
    <>
      {pageLoading && (
        <div className="w-full h-full bg-black flex justify-center items-center flex-wrap z-50 absolute left-0 top-0 ">
          <div className="loader">
            <svg viewBox="0 0 80 80">
              <circle id="test" cx="40" cy="40" r="32"></circle>
            </svg>
          </div>
          <div className="loader triangle">
            <svg viewBox="0 0 86 80">
              <polygon points="43 8 79 72 7 72"></polygon>
            </svg>
          </div>

          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64"></rect>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
