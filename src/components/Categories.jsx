import {NavLink} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Categories({ genres }) {
   return (
      <>
         <div className="w-[270px] h-fit bg-gray-dark py-3 rounded-md sticky">
            <h2 className="text-center text-teal-dark text-xl capitalize">categories</h2>
            <div className="mt-5 flex justify-center flex-col gap-2">
               {genres?.map((genre) => {
                  return (
                     <NavLink
                        key={genre.id}
                        to={`/movies?with_genres=${genre.id}`}
                        className="text-text-dark font-medium px-3 py-1.5 text-[16px]"
                     >
                        {genre.name}
                     </NavLink>
                  )
               })}
            </div>
         </div>
      </>
   );
}