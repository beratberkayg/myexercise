"use client";

import { kullanıcıSil } from "../redux/DataSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Users = () => {
    const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.data);
  console.log(data);

  
  
  return (
    <div>
      <p>kullanıcılar</p>
      {data.map((dt, i) => (
        <div>
        <div key={i}>
          hoş Geldin -> {dt.isim} {dt.soyisim}
        </div>
        
        </div>
        
            
      ))}


      
    </div>
  );
};

export default Users;
