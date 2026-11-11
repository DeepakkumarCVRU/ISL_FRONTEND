// import { Link } from "react-router-dom"

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom"

const UpperNavbar = () => {
  return (
    <>
        <div className="flex  justify-between text-primary ">
            <div className=" flex gap-10 h-10 items-center ">
              <Link to ="/" >Premier League</Link>
            <Link to ="/" >shop</Link>
            <Link to ="/" >about us</Link>
            <Link to ="/" >football community</Link>
            <Link to ="/" ></Link>
            </div>
           <div className=" flex items-center gap-4 mr-4">
            follow us
            <Link to ="/"  ><FaInstagram className="text-red-500"/></Link>
            <Link to ="/"  ><FaXTwitter/></Link>
            <Link to ="/"  ><FaYoutube/></Link>
            <Link to ="/"  ><FaFacebook/></Link>
           </div>
        </div>  
    </>
  )
}

export default UpperNavbar