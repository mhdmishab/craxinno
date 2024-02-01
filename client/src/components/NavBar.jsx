import logo from "../assets/images/logo.png";
import { FaRegQuestionCircle } from "react-icons/fa";

const NavBar = () => {
    return (
        <div
            className="bg-white top-0 z-50 sticky  flex justify-between items-center px-4 sm:px-14 border-opacity-10
         border-black border-b boder-black"
        >
            <div className="bg-white flex  justify-center mb-2 sm:mb-0">
                <img className="w-60 mt-2 md:mt-0 h-12  md:w-72 md:h-16" src={logo} alt="" />
            </div>
            <div className="bg-white flex items-center justify-end md:justify-center mr-2 sm:mr-10">
                <FaRegQuestionCircle className="text-2xl sm:text-3xl" />
            </div>
        </div>
    );
};

export default NavBar;
