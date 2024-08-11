import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { useDessertInfo } from '../hooks/useDessertInfo';
import { useDispatch } from 'react-redux';

import { addItem } from '../utils/cartSlice';

export default function DessertInfo() {

  const { id } = useParams();

   const dessertInfo = useDessertInfo(id);

   const dispatch = useDispatch();


  if(!dessertInfo){
    return (

      <h1>Loading.....</h1>
    )

  }

  const handleaddItem = () =>{
    dispatch(addItem(id));
  }

  return (

    <div style={{height:'100vh'}}>
      <h1>Dessert details</h1>
        <div className='details'>
          <h1>{dessertInfo.strMeal}</h1>
          <img src={dessertInfo.strMealThumb} alt={dessertInfo.strMeal}/>
          <p>{dessertInfo.strInstructions}</p>
          <ul>
            {dessertInfo.ingredients.map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
          <button onClick={handleaddItem}> Add to CART</button>

        </div>
        
    </div>
  )
}


