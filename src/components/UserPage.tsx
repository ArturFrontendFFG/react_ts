import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { List } from "./List";
import { UserItem } from "./UserItem";
export const UserPage: FC = ({}) => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} />}
    />
  );
};
