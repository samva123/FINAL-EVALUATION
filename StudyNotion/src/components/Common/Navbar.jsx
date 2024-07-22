import React from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link , matchPath, useLocation} from "react-router-dom"
import { NavbarLinks } from "../../data/navbar-links"

const Navbar = () => {

    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }
    return(
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"  />

            </Link>

            <nav>
                <ul className="flex gap-x-6 text-richblack-25">
                    {
                        NavbarLinks.map((link ,index) => (
                            <li key ={index}>
                                {
 (


                                    <Link to={link?.path}>
                                        <p className={`${
                                                matchRoute(link?.path)
                                                ? "text-yellow-25"
                                                : "text-richblack-25"
                                            }`}>
                                            {link.title}
                                        </p>
                                           
                                    </Link>


                                 )
                                }

                            </li>
                        ))
                    }

                </ul>

            </nav>


            {/* Login / Signup / Dashboard */}

            <div  className="hidden items-center gap-x-4 md:flex">

            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>

            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>





            </div>



        </div>

    </div>
    )
    
}

export default Navbar