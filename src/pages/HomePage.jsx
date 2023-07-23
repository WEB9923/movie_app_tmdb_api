import Header from "../components/Header.jsx";
import SliderContent from "../components/SliderContent.jsx";
import {getAllData} from "../services/GetAllData.js";
import {useEffect, useState} from "react";

export default function HomePage() {
   const [latestData,setLatestData] = useState([]);
   const [upcomingData,setUpcomingData] = useState([]);

   const fetchLatest = async () => {
      try {
         return await getAllData("movie","top_rated");
      } catch (err) {
         console.log(err);
      }
   }

   const fetchUpcoming = async () => {
      try {
         return await getAllData("movie","upcoming");
      } catch (err) {
         console.log(err);
      }
   }



   useEffect(() => {
      fetchLatest().then((res) => {
         setLatestData(res.results);
      })
   },[]);

   useEffect(() => {
      fetchUpcoming().then((res) => {
         setUpcomingData(res.results);
      })
   }, []);


   return (
      <>
         <Header/>
         <SliderContent title={"latest movies"} data={latestData}/>
         <SliderContent title={"upcoming movies"} data={upcomingData}/>
      </>
   );
}
