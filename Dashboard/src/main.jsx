import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import Base from "./DashboardPage/Base/Base";
import Orders from "./DashboardPage/Orders/Order";
import Holdings from "./DashboardPage/Holdings/Holdings";
import Positions from "./DashboardPage/Positions/Positions";
import Funds from "./DashboardPage/Funds/Funds";
import Apps from "./DashboardPage/Apps/Apps";
import NotFound from "./DashboardPage/NotFound/NotFound";
import Signup from "./DashboardPage/Authentication/Signup";
import Login from "./DashboardPage/Authentication/Login";
import { CookiesProvider } from "react-cookie";
import GeneralContextProvider from "./DashboardPage/GeneralContext/GeneralContext";

function App() {
  return (
    <GeneralContextProvider>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Base />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </GeneralContextProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>
);
