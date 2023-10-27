import { FC } from "react";
import { IUser } from "../types/types";
import { UserItem } from "./UserItem";
interface IUserListProps {
  users: IUser[];
}
export const UserList: FC<IUserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
