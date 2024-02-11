"use client";

import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
      router.push("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [pageLoading]);
  return <div className="">{pageLoading && <Loader />}</div>;
};

export default Page;
