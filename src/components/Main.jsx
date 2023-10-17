import { Outlet } from "react-router-dom";
import Top from "./Top";


const Main = () => {
    return (
        <div>
            <Top></Top>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;