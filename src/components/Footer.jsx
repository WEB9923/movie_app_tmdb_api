import {getAllData} from "../services/GetAllData.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AiOutlineArrowUp} from "react-icons/ai";
import {useWindowScroll} from "@mantine/hooks";
import footerLinks from "../data/footerLinks.json";

export default function Footer() {
   const [genres,setGenres] = useState([]);
   const [scroll,scrollTo] = useWindowScroll();

   const fetchGenres = async () => {
      try {
         return await getAllData("genre","movie/list")
      } catch (err) {
         console.log(err)
      }
   }
   
   useEffect(() => {
      fetchGenres().then((res) => setGenres(res.genres));
   },[])
   
   return (
      <>
         <footer className="py-8 bg-gray-dark">
            <div className="container">
               <div className="flex items-center justify-between py-5 border-b-[1px] border-text-dark">
                  <Link
                     to={"/"}
                     className="text-teal-light font-extrabold uppercase text-sm md:text-xl"
                  >
                     <h1>mo<span className="text-teal-dark">vie</span></h1>
                  </Link>
                  <button
                     onClick={() => scrollTo({y:0,x:0})}
                     className="w-8 h-8 bg-gray-light rounded-md flex items-center justify-center text-teal-dark"
                  >
                     <AiOutlineArrowUp size={22}/>
                  </button>
               </div>
               <div className="flex flex-wrap md:gap-16 gap-8 py-5">
                  <div className="flex flex-col">
                     <h2 className="text-text-dark capitalize text-[18px] font-bold relative before:w-1/2 before:h-0.5 before:bg-text-dark before:absolute before:bottom-0">
                        navigation
                     </h2>
                     <div className="mt-3 flex flex-col gap-2">
                        {footerLinks.map((link) => {
                           return (
                              <Link
                                 key={link.id}
                                 to={link.path}
                                 className="text-sm font-medium text-text-dark capitalize"
                              >
                                 {link.title}
                              </Link>
                           )
                        })}
                     </div>
                  </div>
                  <div className="flex flex-col">
                     <h2 className="text-text-dark capitalize text-[18px] font-bold relative before:w-1/2 before:h-0.5 before:bg-text-dark before:absolute before:bottom-0">
                        categories
                     </h2>
                     <div className="mt-3 flex flex-col gap-2">
                        {genres?.map((genre) => {
                           return (
                              <Link
                                 key={genre.id}
                                 to={`/movies?with_genres=${genre.id}`}
                                 className="text-sm font-medium text-text-dark"
                              >
                                 {genre.name}
                              </Link>
                           )
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}