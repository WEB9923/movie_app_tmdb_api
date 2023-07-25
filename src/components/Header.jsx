import {Carousel} from "@mantine/carousel";
import {FaChevronDown, FaChevronUp, FaStar} from "react-icons/fa";
import {rem} from "@mantine/core";
import {useEffect, useState} from "react";
import {getAllData} from "../services/GetAllData.js";
import {Link} from "react-router-dom";
import Loader from "./Loader.jsx";
import {BiShow} from "react-icons/bi";
import {motion} from "framer-motion";


export default function Header() {
   const [data,setData] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const fetchData = async () => {
      try {
         setIsLoading(true);
         return await getAllData("movie","popular");
      } catch (err) {
         console.log(err);
      } finally {
         setIsLoading(false);
      }
   }
   useEffect(() => {
      fetchData().then((res) => {
         setData(res.results);
      })
   },[])

   return (
      <>
         <header className="h-[calc(100vh-5rem)] relative">
            {isLoading ? <Loader/> : <Carousel
               orientation="vertical"
               withIndicators={true}
               height={"100%"}
               loop={true}
               h={"100%"}
               w={"100%"}
               mx="auto"
               slideGap="xl"
               nextControlIcon={<FaChevronDown size={30} />}
               previousControlIcon={<FaChevronUp size={30} />}
               styles={{
                  control:{
                     border: "none",
                     width: rem(40),
                     height: rem(40),
                     display: "flex",
                     align: "center",
                     justify: "center",
                     position:"relative"
                  }
               }}
            >
               {data?.map((banner) => {
                  return (
                     <Carousel.Slide
                        key={banner.id}
                        className="w-full h-full flex items-center justify-between relative"
                     >
                        <img
                           src={`https://image.tmdb.org/t/p/original/${banner.backdrop_path}`}
                           alt={banner.original_title}
                           className="w-full h-full object-cover object-center z-10"
                        />
                        <motion.div
                           initial={{
                              y:50,
                              opacity:0,
                              x:"50%"
                           }}
                           whileInView={{
                              y:0,
                              x:"-50%",
                              opacity:1
                           }}
                           transition={{
                              duration:0.5,
                              type:"spring",
                              stiffness:70,
                              bounce:1
                           }}
                           className="absolute bottom-20 left-1/2 transform -translate-x-2/4 z-50 w-3/4 flex flex-col gap-3"
                        >
                           <div className="pointer-events-none select-none flex flex-col gap-3">
                              <div>
                                 <h1
                                    className="text-start text-teal-dark font-extrabold text-2xl md:text-3xl line-clamp-2"
                                 >
                                    {banner.original_title}
                                 </h1>
                              </div>
                              <div>
                                 <p
                                    className="text-start text-teal-light font-light text-[15px] md:text-[16px] line-clamp-2"
                                 >
                                    {banner.overview}
                                 </p>
                              </div>
                              <div>
                                 <h2
                                    className="text-start text-text-dark font-bold text-xl md:text-2xl"
                                 >
                                    {banner.release_date}
                                 </h2>
                              </div>
                              <div>
                                 <div
                                    className="px-3 py-1 rounded-md bg-transparents-dark w-fit text-teal-dark font-extrabold flex items-center gap-1"
                                 >
                                    <FaStar size={18}/>
                                    {banner.vote_average}
                                 </div>
                              </div>
                           </div>
                           <div className="mt-2">
                              <Link
                                 to={`/single/${banner.id}`}
                                 className="px-3 py-1.5 rounded-md bg-transparents-dark text-teal-dark w-fit flex items-center justify-center"
                              >
                                 <BiShow size={25}/>
                              </Link>
                           </div>
                        </motion.div>
                     </Carousel.Slide>
                  )
               })}
            </Carousel>}
         </header>
      </>
   );
}
