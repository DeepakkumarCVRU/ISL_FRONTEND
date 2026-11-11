import { Link } from "react-router-dom";
import islLogo from "../../assets/isl_logo1.png";
import { TbMenu2 } from "react-icons/tb";
import { useState } from "react";
import { VscCloseCompact } from "react-icons/vsc";
import TogglePage from "./TogglePage";



const MainNavbar = () => {
    const [toggle, setToggle] = useState(false);
    const [signInToggle , setSignInToggle] = useState(true);
    return (
        <>
            <div className="flex items-center gap-10 text-primary border-b border-t rounded-b-xl shadow-xl shadow-[rgb(250, 249, 250)]">
                <img src={islLogo} alt="" className="h-20 " />
                <div className="flex items-center h-20 gap-7 font-bold text-lg">
                    <Link to="/#" className="mainNavbar"> Matches</Link>
                    <Link to="/#" className="mainNavbar">Table</Link>
                    <Link to="#" className="mainNavbar">Statistics</Link>
                    <Link to="#" className="mainNavbar">News</Link>
                    <Link to="#" className="mainNavbar">Injuries</Link>
                    <Link to="#" className="mainNavbar">Players</Link>
                    <Link to="#" className="mainNavbar">Clubs</Link>
                    <Link to="#" className="mainNavbar">Galleries</Link>
                    {/* <Link to="#"className="mainNavbar duration-300 ease-in-out" onClick={()=>setTaggle(!toggle)} >{toggle? <VscCloseCompact size={35}/> : <TbMenu2 size={35}/>}</Link> */}
                    <Link
                        to="#"
                        className="mainNavbar rounded-full inline-flex items-center duration-300 ease-in-out cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span className={`inline-flex transition-transform duration-300 ease-in-out ${toggle ? "rotate-90" : "rotate-0"}`}>
                            {toggle ? (
                                <VscCloseCompact size={35} />
                            ) : (
                                <TbMenu2 size={35} />
                            )}
                        </span>
                    </Link>
                    <Link to={signInToggle ? "/signin" : "/signup"} className="border-2 px-10 py-3 rounded-full hover:bg-[#37003c] hover:text-white duration-300 ease-in-out text-lg ">{signInToggle ? "signIn" : "signUP"}</Link>

                </div>
            </div>

            <TogglePage toggle = {toggle}/>
        </>
    )
}

export default MainNavbar