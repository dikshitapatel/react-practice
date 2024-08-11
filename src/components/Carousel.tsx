import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/apiEndPoints';

export default function Carousel() {

    const [data, setData] = useState<string[]>([]);


    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        
        setActiveIndex((activeIndex - 5 + data.length) % data.length);
    }

    const handleNextClick = () => {
        setActiveIndex((activeIndex+5)%(data.length));
    }

    useEffect(()=>{
        const fetchData = async () => {
            const data = await fetch(BASE_URL);
            const json = await data.json();
            const imageURLS = json.meals.map((meal: {strMealThumb : string}) => meal.strMealThumb);
            setData(imageURLS);
        }
        fetchData();
    },[]);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            handleNextClick();
        },3000);

        return ()=>{clearTimeout(timer);}
    },[activeIndex,data]);

    const renderImages = () => {
        const imagesToShow = 5;
        const start = activeIndex;
        const end = start + imagesToShow;
        const currentImages = data.slice(start, end);
    
        return (
          <div>
            {currentImages.map((image, idx) => (
              <img src={image} alt={`Carousel item ${idx}`} key={idx} className="carousel-image" />
            ))}
          </div>
        );
      };

  return (
    <div className='App-body'>
        <div className='carousel-container'>
            {/* <button onClick={()=> handlePrevClick()}> Prev </button>
            <img src={data[activeIndex]} style={{
            width:'500px',
            height:'200px',
            objectFit:'contain'
            }}/>
            <button onClick={()=> handleNextClick()}> Next </button> */}

            {/* Too many network calls */}

             <button onClick={()=> handlePrevClick()} className="carousel-button"> Prev </button>

                {renderImages()}
            <button onClick={()=> handleNextClick()} className="carousel-button"> Next </button>
            
        </div>      
    </div>
  )
}
