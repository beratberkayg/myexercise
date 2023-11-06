"use client";
import { kullanıcıEkle } from "../redux/DataSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState } from "react";

interface ModalProps {
  closeFunc: () => void;
}

const Modal = ({ closeFunc }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.data);

  const [user, setUser] = useState({
    isim: "",
    soyisim: "",
  });

  const onChangeFunc = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addUser = () => {
    dispatch(kullanıcıEkle({ ...user }));
  };

  console.log(user);
  console.log(data);

  return (
    <div className="bg-black bg-opacity-50 w-full h-screen absolute top-0 flex justify-center items-center flex-col">
      <div className=" w-[250px] flex justify-around">
        <h1>modal</h1>
        <button onClick={closeFunc}>kapat</button>
      </div>
      <div className="flex flex-col gap-5">
        <input
          value={user.isim}
          onChange={(e) => onChangeFunc(e)}
          type="text"
          name="isim"
          id="isim"
        />
        <input
          value={user.soyisim}
          onChange={(e) => onChangeFunc(e)}
          type="text"
          name="soyisim"
          id="soyisim"
        />
      </div>
      <button onClick={addUser} className="border mt-5">
        kullanıcı ekle
      </button>
    </div>
  );
};

export default Modal;
