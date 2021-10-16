import React from 'react'
import PlaysFilter from '../Components/PlaysFilter/PlaysFilter.component';
import Poster from '../Components/Poster/poster.component';
const Plays = () => {
    return (
        <>
           <div className="container mx-auto px-4">
               <div className="w-full lg:flex lg:flex-row-reverse">
                   <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">Plays in Chandigarh</h2>
                   <div className="flex flex-wrap ">
                   <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 ">
                   <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                title="Dum Biryani - 15th Oct"
                subtitle="Comedy, Drama | English | 12yrs + | 24hrs"/>
                   </div>
                   <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                   <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                title="Dum Biryani - 15th Oct"
                subtitle="Comedy, Drama | English | 12yrs + | 24hrs"/>
                   </div><div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                   <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                title="Dum Biryani - 15th Oct"
                subtitle="Comedy, Drama | English | 12yrs + | 24hrs"/>
                   </div><div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                   <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                title="Dum Biryani - 15th Oct"
                subtitle="Comedy, Drama | English | 12yrs + | 24hrs"/>
                   </div>
                    </div>
                        </div>
                    <div className="lg:w-3/12 ">
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilter title="Date"
                            tags={["Today", "Tomorrow", "This Weekends"]}/>
                            <PlaysFilter title="Language"
                            tags={["English", "Hindi", "Kannada"]}/>
                            <PlaysFilter title="Category"
                            tags={["Theatre"]}/>
                            <PlaysFilter title="Genres"
                            tags={["Drama", "Comedy"]}/>
                            <PlaysFilter title="More Filters"
                            tags={["Online Streaming", "Outdoor Events"]}/>
                            <PlaysFilter title="Price"
                            tags={["Free", "0-500", "501-2000","Above 2000"]}/>
                            
                        </div>
                    </div>
               </div>
               
           </div>
        </>
    )
}

export default Plays;
