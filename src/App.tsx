import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./components/UserPage";
import { TodosPage } from "./components/TodosPage";
import { Link } from "react-router-dom";
import { UserItemPage } from "./components/UserItemPage";

export const App = () => {
  const styleNav = {
    fontSize: 22,
    color: "black",
    display: "flex",
    gap: 50,
    margin: "20px 0",
  };
  return (
    // <div>
    //   {/* <EventsExample/> */}
    //   {/* <Card
    //     onClick={(num) => console.log("Click and", num)}
    //     variant={CardVariant.primary}
    //     width="100px"
    //     height="100px"
    //   >
    //     <button>Click</button>
    //   </Card> */}

    // </div>
    <BrowserRouter>
      <header>
        <nav style={styleNav}>
          <Link to={"/users"}>Users</Link>
          <Link to={"/todos"}>Todos</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};
