import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./Home.jsx";
import CreateProfile from "./components/CreateProfile";
import ViewProfile from "./components/ViewProfile";

const appProvider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/create",
    element: <CreateProfile />,
  },
  {
    path: "/view",
    element: <ViewProfile />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={appProvider} />
    </div>
  );
}

export default App;
