import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import MoviesPage from "../pages/MoviesPage.jsx";
import FavoritesPage from "../pages/FavoritesPage.jsx";
import WatchLaterPage from "../pages/WatchLaterPage.jsx";
import SinglePage from "../pages/SinglePage.jsx";

export const Routes = createBrowserRouter([
   {
      path: "/",
      element: <Layout/>,
      children: [
         {path: "/", element: <HomePage/>},
         {path: "/movies", element: <MoviesPage/>},
         {path: "/movies/search/:movieId", element: <MoviesPage/>},
         {path: "/single/:id", element: <SinglePage/>},
         {path: "/favorites", element: <FavoritesPage/>},
         {path: "/watch-later", element: <WatchLaterPage/>}
      ]
   }
]);



