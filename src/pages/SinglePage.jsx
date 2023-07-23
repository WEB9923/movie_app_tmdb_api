import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllData} from "../services/GetAllData.js";
import SinglePageOverView from "../components/SinglePageOverView.jsx";
import SliderContent from "../components/SliderContent.jsx";

export default function SinglePage() {
   const {id} = useParams();
   const [singlePageData,setSinglePageData] = useState(null);
   const [similarMovies,setSimilarMovies] = useState([]);
   const [isLoading,setIsLoading] = useState(false);

   const fetchSingle = async () => {
      try {
         setIsLoading(true);
         return await getAllData("movie",`${parseInt(id)}`);
      } catch (err) {
         console.log(err)
      } finally {
         setIsLoading(false);
      }
   }
   const fetchSimilarMovies = async () => {
      try {
         return await getAllData("movie",`${parseInt(id)}/similar`)
      } catch (err) {
         console.log(err)
      }
   }
   useEffect(() => {
      fetchSingle().then((res) => {
         setSinglePageData(res);
      })
   },[]);

   useEffect(() => {
      fetchSimilarMovies().then((res) => {
         setSimilarMovies(res.results);
      })
   },[]);

   return (
      <>
         <div className="min-h-[calc(100vh-5rem)] h-full w-full relative">
            <SinglePageOverView data={singlePageData} isLoading={isLoading}/>
            <SliderContent title={"similar movies"} data={similarMovies}/>
         </div>
      </>
   );
}
