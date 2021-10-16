import { FaCcPaypal, FaCcAmazonPay } from "react-icons/fa";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";

import { MovieContext } from "../context/movie.context";

import MovieHero from "../Components/MovieHero/MovieHero.component";
import Cast from "../Components/Cast/Cast.component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";

const Movie = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };

    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommended(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  }, [id]);

    const settings = {
        infinite: false,
        speed:500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              InitialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
        ],
      };
    
      const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

      
    return (
        <>
         <MovieHero/>
         <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col item start gap-3">
            <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
            <p>{movie.overview}</p>
        </div>
        <div className="my-8">
            <hr/>
        </div>
        <div className="my-8">
        <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
        <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
        <div className="w-8 h-8 clas">
        <FaCcPaypal className="h-full w-full"/>
        </div>
            <div flex flex-col itme-start>
                <h3 className="text-gray-700 text-xl font-bold">PayPal Stream offer</h3>
                <p className="text-gray-600">
                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy PayPal Pass @Rs.99
                </p>
            </div>
        </div>
        <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
        <div className="w-8 h-8 clas">
        <FaCcAmazonPay className="h-full w-full"/>
        </div>
            <div flex flex-col itme-start>
                <h3 className="text-gray-700 text-xl font-bold">Amazonpay Stream offer</h3>
                <p className="text-gray-600">
                Get Rs.50* off on 3 movies you buy/rent on Stream. Buy Amazon Pass @Rs.99
                </p>
            </div>
        </div>
        </div>
        </div>
        <div className="my-8">
            <hr/>
        </div>
        <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-6">Cast & Carew</h2>
            <Slider {...settingsCast}>
            {cast.map((castdata) => (
              <Cast
                image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                castName={castdata.original_name}
                role={castdata.character}
              />
            ))}
          </Slider>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={similarMovies}
            title="You Might Also like"
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={recommended}
            title="BMS XCLUSIVE"
            isDark={false}
          />
        </div>
         </div>
        </>
    );
};

export default Movie;
