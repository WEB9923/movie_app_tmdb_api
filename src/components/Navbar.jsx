import {Link, NavLink} from "react-router-dom";
import Links from "../data/Links.json";
import {MdOutlineWatchLater} from "react-icons/md";
import {AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";
import {HiOutlineMenuAlt4} from "react-icons/hi";

const laterFav = [
   {
      id:1,
      icon: <MdOutlineWatchLater size={25}/>,
      path:"/watch-later"
   },
   {
      id:2,
      icon: <AiOutlineHeart size={25}/>,
      path:"/favorites"
   }
];

export default function Navbar() {
   const [isShowMobileMenu,setIsShowMobileMenu] = useState(false);

   const handleToggleShowMobileMenu = () => {
      setIsShowMobileMenu(!isShowMobileMenu);
   }

   return (
      <>
         <nav className="w-full h-20 bg-gray-dark relative">
            <div className="container flex items-center justify-between">
               <div>
                  <Link
                     to={"/"}
                     className="text-teal-light font-extrabold uppercase text-sm md:text-xl"
                  >
                     <h1>mo<span className="text-teal-dark">vie</span></h1>
                  </Link>
               </div>
               <div className="flex items-center gap-5">
                  <ul className={`links ${isShowMobileMenu && "activeMobileMenu"}`}>
                     {Links.map((link) => {
                        return (
                           <li key={link.id}>
                              <NavLink
                                 to={link.path}
                                 className="font-bold text-[18px] text-text-dark capitalize link"
                              >
                                 {link.title}
                              </NavLink>
                           </li>
                        )
                     })}
                  </ul>
                  <div className="flex items-center gap-4">
                     {laterFav.map((link) => {
                        return (
                           <NavLink
                              key={link.id}
                              to={link.path}
                              className="flex items-center gap-1 font-bold text-[18px] text-text-dark capitalize link"
                           >
                              {link.icon}
                           </NavLink>
                        )
                     })}
                  </div>
                  <button
                     onClick={handleToggleShowMobileMenu}
                     className={`burger ${isShowMobileMenu && "bg-gray-light"}`}
                  >
                     <HiOutlineMenuAlt4 size={22} className={`${isShowMobileMenu && "text-teal-dark"}`}/>
                  </button>
               </div>
            </div>
         </nav>
      </>
   );
}
