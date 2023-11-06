"use client";

import { useEffect, useState } from "react";
import { modalFunc } from "./redux/ModalSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export default function Home() {
  const [name, setName] = useState<string>("berat");
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.modal);

  useEffect(() => {
    if (!modal) {
      setName("berkay");
    }
  }, [modal]);

  const changeFunc = () => {
    dispatch(modalFunc());
  };

  return (
    <div>
      <div>{name}</div>
      <button onClick={changeFunc}>değiştir</button>
      {modal ? <div>true</div> : <div>false</div>}
      {modal && <div>berat</div>}
      <div className={`${modal ? "text-3xl" : ""}`}>sadasd</div>
    </div>
  );
}
