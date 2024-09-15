import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './index.css'
import Navbar from './Landing-page/Navbar';
import HomePage from './Landing-page/Home/HomePage';
import PricingPage from "./Landing-page/Pricing/PricingPage"
import ProductsPage from "./Landing-page/Products/ProductsPage"
import SignUpPage from "./Landing-page/SignUp/SignUpPage"
import SupportPage from "./Landing-page/Support/SupportPage"
import AboutPage from "./Landing-page/About/AboutPage"
import Footer from './Landing-page/Footer/Footer';
import NotFound from './Landing-page/NotFound';

function App() {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/pricing' element={<PricingPage />} />
                <Route path='/product' element={<ProductsPage />} />
                <Route path='/support' element={<SupportPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {location.pathname !== "/support" && <Footer />}
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);