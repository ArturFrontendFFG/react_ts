import { FC } from "react";
import { IUser } from "../types/types";
import { useNavigate } from "react-router-dom";

interface IUserItemProps {
  user: IUser;
}

export const UserItem: FC<IUserItemProps> = ({ user }) => {
  const navigate = useNavigate();
  const handleClickRedirect = () => {
    navigate(`/users/${user.id}`)
  }
  return (
    <div onClick={handleClickRedirect} style={{cursor: 'pointer'}}>
      {" "}
      <div style={{ padding: 15, border: "1px solid gray" }}>
        {user.id}.{user.name} проживает в городе {user.address.city} на улице{" "}
        {user.address.street}
      </div>
    </div>
  );
};
