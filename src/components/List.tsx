import { useEffect } from "react";
import "./List.css";

interface props {
  userList: { id: number; name: string }[];
  cbGetData: () => void;
  onUserClick: (info: { id: number; name: string }) => void;
}

export default function List({ cbGetData, userList, onUserClick }: props) {
  useEffect(() => {
    cbGetData();
  }, []);

  return (
    <div className="list-container">
      <ul className="users">
        {userList.map((el: { id: number; name: string }) => {
          return (
            <li className="user" key={el.id} onClick={() => onUserClick(el)}>
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
