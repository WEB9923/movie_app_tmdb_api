import {Link} from "react-router-dom";
import {BsPlayCircle} from "react-icons/bs";
import {motion} from "framer-motion";

export default function Card({movie,index}) {
   return (
      <>
         <motion.div
            className="flex-1 min-w-[230px] h-[330px] rounded-md overflow-hidden relative card"
            initial={{
               y: -50,
               opacity:0
            }}
            animate={{
               y:0,
               opacity:1
            }}
            transition={{
               duration: 0.5,
               delay: index * 0.05,
               type:"tween"
            }}
         >
            <Link
               to={`/single/${movie?.id}`}
               className="w-full h-full"
            >
               <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt={movie?.original_title}
                  className="w-full h-full object-cover object-center"
               />
               <div className="absolute w-full h-full hidden items-center justify-center bg-transparents-dark z-50 top-0 left-0 cardAfter transition duration-300">
               <span className="w-14 h-14 rounded-full bg-transparents-darkest flex items-center justify-center pointer-events-none transition duration-300">
                  <BsPlayCircle size={30} className="text-teal-dark"/>
               </span>
               </div>
            </Link>
         </motion.div>
      </>
   );
}
