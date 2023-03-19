import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/index";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import About from "./pages/About/About";

const router = createBrowserRouter([
  {
    element: <Layout  />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        path: "/settings",
        element: <ProtectedRoute element={<Settings />} />,
      },
      {
        path: "/about",
        element: <ProtectedRoute element={<About />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
