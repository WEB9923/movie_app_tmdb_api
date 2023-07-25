import {getAllData} from "../services/GetAllData.js";
import {useEffect, useState} from "react";
import {usePagination} from "@mantine/hooks";
import {Pagination} from "@mantine/core"
import Categories from "../components/Categories.jsx";
import {useLocation} from "react-router-dom";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";

export default function MoviesPage() {
   const [data,setData] = useState([]);
   const [genres,setGenres] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const [page,setPage] = useState(1);
   const location = useLocation();
   let searchQuery = location.search;
   const newQuery = new URLSearchParams(searchQuery);

   const fetchAllMovie = async () => {
      try {
         setIsLoading(true);
         let link = await getAllData("discover",`movie?page=${page}`);
         if(searchQuery) {
            if(newQuery.has("with_genres")) {
               return await getAllData("discover",`movie${searchQuery}&page=${page}`);
            } else if(newQuery.has("query")) {
               return await getAllData("search",`movie${searchQuery}&?page=${page}`);
            }
         } else {
            return await link;
         }
      } catch (err) {
         console.log(err)
      } finally {
         setIsLoading(false);
      }
   }


   const fetchGenres = async () => {
      try {
          return await getAllData("genre","movie/list")
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      fetchAllMovie().then((res) => {
         setData(res);
      })
   },[searchQuery,page]);

   useEffect(() => {
      newQuery.append("page",page.toString())
   },[])


   useEffect(() => {
      fetchGenres().then((res) => {
         setGenres(res.genres);
      })
   },[])


   const pagination = usePagination({
      total:data?.total_pages,
      initialPage: 1,
      onChange: (page) => {setPage(page)},
      next: () => page + 1,
      previous: () => page - 1
   })

   return (
      <>
         <section className="section">
            <div className="container flex justify-between gap-5">
               <Categories genres={genres}/>
               <div className="w-[calc(100%-270px-30px)] min-h-screen relative">
                  <div className="flex justify-between h-12 items-center">
                     <h3 className="font-bold text-text-dark text-sm capitalize">
                        total movies: {data?.total_results}
                     </h3>
                     {searchQuery && <button
                        onClick={() => {
                           console.log("clicked")
                        }}
                        className="bg-red-dark py-1.5 px-3 rounded-md text-text-light capitalize font-medium text-sm"
                     >
                        clear search or category
                     </button>}
                  </div>
                  <div className="flex flex-1 flex-wrap gap-3">
                     {isLoading ? <Loader/> : data?.results?.map((mov,index) => {
                        return (
                           <Card key={mov.id} movie={mov} index={index}/>
                        )
                     })}
                  </div>
               </div>
            </div>
            <Pagination
               total={data?.total_pages}
               color="#12ae9d"
               radius="md"
               size="lg"
               siblings={3}
               position="center"
               mt={40}
               onPreviousPage={() => pagination.previous()}
               onNextPage={() => pagination.next()}
               onChange={(page) => setPage(page)}
            />
         </section>
      </>
   );
}