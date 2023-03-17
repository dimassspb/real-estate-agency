import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Header() {
    // const [pageState, setPageState] = useState("Sign in");
    const location = useLocation();
    const navigate = useNavigate();

    // const auth = getAuth();
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setPageState("Profile");
    //         } else {
    //             setPageState("Sign in");
    //         }
    //     });
    // }, [auth]);
    console.log(location.pathname)
    const pathMatchRoute = (route) => (route === location.pathname ? true : false)
   
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img
                        src='logo.png'
                        alt='logo'
                        className='h-7 cursor-pointer'
                        onClick={() => navigate("/")}
                    />
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                                pathMatchRoute("/") &&
                                "text-black border-b-red-500"
                            }`}
                            onClick={() => navigate("/")}
                        >
                            Главная
                        </li>
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                                pathMatchRoute("/offers") &&
                                "text-black border-b-red-500"
                            }`}
                            onClick={() => navigate("/offers")}
                        >
                            Предложения
                        </li>
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                                (pathMatchRoute("/sign-in")) &&
                                "text-black border-b-red-500"
                            }`}
                            onClick={() => navigate("/sign-in")}
                        >
                            Войти
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
