"use client";

import { useAppSelector } from "../redux/hooks";

const Users = () => {
  const { data } = useAppSelector((state) => state.data);
  console.log(data);
  return (
    <div>
      <p>kullanıcılar</p>
      {data.map((dt, i) => (
        <div key={i}>
          {dt.isim} + {dt.soyisim}
        </div>
      ))}
    </div>
  );
};

export default Users;
