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
   const [isLoading,setIsloading] = useState(false);
   const location = useLocation();
   console.log(
      location
   )

   const fetchAllMovie = async () => {
      try {
         setIsloading(true);
         let link = await getAllData("discover","movie");
         if(location.pathname) {
            return await getAllData("discover",`movie/${location.search}`);
         } else {
            return await link;
         }
      } catch (err) {
         console.log(err)
      } finally {
         setIsloading(false);
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
   },[location]);



   useEffect(() => {
      fetchGenres().then((res) => {
         setGenres(res.genres);
      })
   },[])


   const pagination = usePagination({
      total:data?.total_pages
   })
   console.log(data)
   return (
      <>
         <section className="section">
            <div className="container flex justify-between gap-5">
               <Categories genres={genres}/>
               <div className="w-[calc(100%-270px-30px)] min-h-screen flex flex-1 flex-wrap gap-3">
                  {isLoading ? <Loader/> : data?.results?.map((mov) => {
                     return (
                        <Card key={mov.id} movie={mov}/>
                     )
                  })}
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
            />
         </section>
      </>
   );
}