import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BASE_URL } from "./DashboardPage/constants/constants";
import { toast } from "react-toastify";

function App() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [isAuth, setisAuth] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        setisAuth(false);
        return;
      }
      try {
        const { data } = await axios.post(
          `${BASE_URL}`,
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        if (status) {
          setisAuth(true);
          toast(`${user}`, {
            position: "bottom-right",
          });
        } else {
          removeCookie("token");
          setisAuth(false);
        }
      } catch (error) {
        console.error("Auth verification failed:", error);
        removeCookie("token");
        setisAuth(false);
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <GeneralContextProvider>
      <Routes>

        {!isAuth && (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Login />} />
          </>
        )}
        {isAuth && (
          <>
            <Route path="/" element={<Base />} />
            <Route path="/dashboard" element={<Base />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}

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
