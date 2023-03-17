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
    console.log(location.pathname);
    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return "cursor-pointer py-3 text-sm font-semibold text-black border-b-[3px] border-b-red-500";
        } else {
            return "cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent";
        }
    };

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
                            className={pathMatchRoute("/")}
                            onClick={() => navigate("/")}
                        >
                            Главная
                        </li>
                        <li
                            className={pathMatchRoute("/sale")}
                            onClick={() => navigate("/sale")}
                        >
                            Продажа
                        </li>
                        <li
                            className={pathMatchRoute("/rent")}
                            onClick={() => navigate("/rent")}
                        >
                            Аренда
                        </li>
                        <li
                            className={pathMatchRoute("/sign-in")}
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
