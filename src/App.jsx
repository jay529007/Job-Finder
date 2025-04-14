import Navbar from "./pages/navbar";
import SimpleForm from "./pages/Register";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./mainlayout";
import { Jobs, UserData, Register } from "./pages/pages";
import { Notfound } from "./notfound";
import AddJob from './pages/addJob'

const router = createBrowserRouter([
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
        element: <AddJob/>,
      },
      {
        path: "*",
        element: <Notfound/>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
