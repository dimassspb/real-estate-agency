import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RentOffers from "./pages/RentOffers";
import SaleOffers from "./pages/SaleOffers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/rent' element={<RentOffers />} />
                    <Route path='/sale' element={<SaleOffers />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route
                        path='/forgot-password'
                        element={<ForgotPassword />}
                    />
                </Routes>
            </Router>
            <ToastContainer
                position='bottom-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </>
    );
}

export default App;
