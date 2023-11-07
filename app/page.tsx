"use client";

import { useEffect, useState } from "react";
import { modalFunc } from "./redux/ModalSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Modal from "./components/Modal";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState<string>("berat");
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.modal);

  const router = useRouter();
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
      <button className="border " onClick={() => router.push("/users")}>
        users git
      </button>
    </div>
  );
}
