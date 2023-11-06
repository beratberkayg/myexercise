"use client";

import { useEffect, useState } from "react";
import { modalFunc } from "./redux/ModalSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Modal from "./components/Modal";

export default function Home() {
  const [name, setName] = useState<string>("berat");
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.modal);

  const changeFunc = () => {
    dispatch(modalFunc());
  };

  const closeFunc = () => {
    dispatch(modalFunc());
  };

  return (
    <div>
      <div>{name}</div>
      <button onClick={changeFunc}>modal aç</button>
      {modal ? <div>true</div> : <div>false</div>}
      {modal && <Modal closeFunc={closeFunc} />}
    </div>
  );
}
