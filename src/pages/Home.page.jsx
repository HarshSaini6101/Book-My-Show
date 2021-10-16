import axios from "axios";
import React, { useState, useEffect } from "react";

import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";

import TempPosters from "../config/TempPosters.config";
import PosterSlider from "../Components/PosterSlider/PosterSlider.component";
const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

  
    useEffect(() => {
      const requestPopularMovies = async () => {
        const getPopularMovies = await axios.get("/movie/popular");
        setPopularMovies(getPopularMovies.data.results);
      };
  
      requestPopularMovies();
    }, []);
  
    useEffect(() => {
      const requestTopRatedMovies = async () => {
        const getTopRatedMovies = await axios.get("/movie/top_rated");
        setTopRatedMovies(getTopRatedMovies.data.results);
      };
  
      requestTopRatedMovies();
    }, []);
  
    useEffect(() => {
      const requestUpcomingMovies = async () => {
        const getUpcomingMovies = await axios.get("/movie/upcoming");
        setUpcomingMovies(getUpcomingMovies.data.results);
      };
  
      requestUpcomingMovies();
    }, []);
   

    return(
    <>
    {" "}
     <div className="container mx-auto px-4 my-8">
         <div  className="px-4 py-4 ">
    <h1 className="text-xl font-bold text-gray-800 ">The Best of Entertainment</h1>
    <p className="text-xs text-gray-800">Step out or stay in, interesting experiences for everyone.</p>
    </div>
   <EntertainmentCardSlider />
   </div>
   <div className="bg-bms-800 py-10 my-14">
   <div className="container mx-auto px-2 md:px-8">
   <div>
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="premier"/>
        </div>
  ``     <PosterSlider images={popularMovies} title="Premier" subtitle="Brand New Releases Every Friday" isDark/>
  </div> 
  </div>
  <div className="container mx-auto px-2 md:px-8">
  <PosterSlider images={topRatedMovies} title="Online Streaming Events" isDark={false}/>
  <PosterSlider images={upcomingMovies} title="Outdoor Events" isDark={false}/>
  
  

  </div>
    </>
    );
};
export default HomePage;