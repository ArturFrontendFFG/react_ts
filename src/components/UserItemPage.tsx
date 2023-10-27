import { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IUser } from "../types/types";

interface IUserItemPageParams {
  id: string;
}

export const UserItemPage: FC = ({}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const {id} = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const hanleClickRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <button onClick={hanleClickRedirect}>Back </button>
      <div>Page: {user?.name} </div>
      <div>Email: {user?.email} </div>
    </div>
  );
};
