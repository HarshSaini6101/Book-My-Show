import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousal = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };

    requestNowPlayingMovies();
  }, []);

    const settingsLg={
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding:"300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    

    const settings = {
        arrows:true,
        autoplay:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };
    return ( <>
    <div className="lg:hidden">
    <HeroSlider {...settings}>
        {images.map((image) => (
            <div className="w-full h-56 md:h-72 py-3">
            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full"/>
            </div>
        ))}
    </HeroSlider>
    </div>
    <div className="hidden lg:block">
    <HeroSlider {...settingsLg}>
        {images.map((image) => (
            <div className="w-full h-80 px-2 py-3">
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
            </div>
        ))}
    </HeroSlider>
    </div>
    </> );
};

export default HeroCarousal;