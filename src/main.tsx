import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/index";
import { Provider } from "react-redux";
import Home from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  </React.StrictMode>
);
