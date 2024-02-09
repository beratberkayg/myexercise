"use client";

import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [pageLoading]);
  return (
    <div className="w-full h-full">
      <div>Home PAge</div>
    </div>
  );
};

export default LoginPage;
