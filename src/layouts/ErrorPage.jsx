import { Link } from "react-router-dom";
import errorImg from "./../../public/images/404/404.gif"
import { BsArrowLeft } from 'react-icons/bs';

const ErrorPage = () => {
    return (
        // < !--component -- >
        <main className="h-screen w-full flex flex-col justify-center items-center ">

            <button className="mt-5">
                <a
                    className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    

                    <span className="relative block px-8 py-3">
                        <Link className="font-rancho text-3xl flex items-center gap-4 font-normal text-[#374151]" to="/"> <BsArrowLeft /> Back to Home</Link>
                    </span>
                </a>
            </button>
            <img className="mt-20 h-3/4" src={errorImg} alt="" />

        </main>
    );
};

export default ErrorPage;