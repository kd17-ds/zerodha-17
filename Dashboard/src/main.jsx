import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './index.css'
import Base from "./DashboardPage/Base/Base";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path='/' element={<Base />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);