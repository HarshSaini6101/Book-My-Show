import React from 'react'
import Slider from 'react-slick';

import settings from '../../config/posterCarousal.config';

import Poster from '../Poster/poster.component';

const PosterSlider = (props) => {
    const sliderConfig = props.config ? props.config : settings;
    return (
        <>
        <div >
        <h3 className={`text-2xl font-bold px-4 my-2 ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
    <p className={`text-sm px-4 my-2 ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
      
           <Slider {...sliderConfig}>
           {props.images.map((image) => (
               <Poster {...image} isDark={props.isDark} />
           ))}
           </Slider>
           </div>
        </>
    );
};

export default PosterSlider;
