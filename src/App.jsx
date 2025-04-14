// import Navbar from "./pages/navbar";
// import SimpleForm from "./pages/Register";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./mainlayout";
import { Jobs, UserData, Register } from "./pages/pages";
import { Notfound } from "./notfound";
import AddJob from "./pages/addJob";
import Login from "./pages/Login";
import { login } from "./features/userSlice";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/userdata",
        element: <UserData />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addjobs",
        element: <AddJob />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* {login && <RouterProvider router={router} />} */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
