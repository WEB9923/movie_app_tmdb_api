import {Link} from "react-router-dom";

export default function Card({movie}) {
   return (
      <>
         <Link
            to={`/single/${movie?.id}`}
            className="flex-1 min-w-[230px] h-[330px] rounded-md overflow-hidden"
         >
            <div className="w-full h-full">
               <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.original_title}/>
            </div>
         </Link>
      </>
   );
}
