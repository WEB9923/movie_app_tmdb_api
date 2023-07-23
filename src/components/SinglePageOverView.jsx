import Loader from "./Loader.jsx";

export default function SinglePageOverView({data,isLoading}) {
   return (
      <>
         {isLoading ? <Loader/> : <div
            className="w-full h-full relative singlePageBannerLayer min-h-[140vh] md:min-h-[calc(100vh-5rem)]"
            style={{
               backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
               backgroundSize: "cover",
               backgroundPosition:"center"
            }}
         >
            <div className="container z-50 flex absolute items-center top-1/2 left-1/2 py-5 transform -translate-y-1/2 -translate-x-1/2">
               <div className="flex w-full h-full items-center gap-10 md:flex-row flex-col">
                  <div className="">
                     <img
                        src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                        alt={data?.title}
                        className="w-[250px]"
                     />
                  </div>
                  <div className="md:max-w-[60%] max-w-full flex flex-col gap-3">
                     <div className="">
                        <h1 className="text-teal-light text-2xl font-bold">{data?.title}</h1>
                     </div>
                     <div className="flex items-center gap-3 flex-wrap">
                        {data?.genres.map((genre) => {
                           return (
                              <div
                                 key={genre.id}
                                 className="py-1 px-2.5 bg-transparents-dark text-text-dark rounded-md w-fit"
                              >
                                 {genre.name}
                              </div>
                           )
                        })}
                     </div>
                     <div className="">
                        <p className="text-[16px] text-text-dark ">release date: {data?.release_date}</p>
                     </div>
                     <div className="flex items-center gap-3 flex-wrap">
                        <p className="text-text-dark text-[16px] capitalize font-bold">langs:</p>
                        {data?.spoken_languages.map((lang) => {
                           return (
                              <div
                                 key={lang.iso_639_1}
                                 className="py-1 px-2.5 bg-transparents-dark text-text-dark rounded-md w-fit"
                              >
                                 {lang.english_name}
                              </div>
                           )
                        })}
                     </div>
                     <div className="">
                        <p className="text-text-dark text-[18px] font-light">{data?.overview}</p>
                     </div>
                     <div className="">
                        <h2 className="text-teal-dark text-[18px] font-medium">budget: ${data?.budget}</h2>
                     </div>
                     <div className="">
                        <h3 className="text-teal-dark text-[18px] font-medium flex items-center gap-3">
                           duration:
                           <span className="py-1 px-2.5 bg-transparents-dark text-text-dark rounded-md w-fit">
                              {data?.runtime}m
                           </span>
                        </h3>
                     </div>
                     <div className="">
                        <button className="py-2 px-4 bg-gray-dark">add to favorites</button>
                        <button className="py-2 px-4 bg-gray-dark">add to watch later</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>}
      </>
   );
}