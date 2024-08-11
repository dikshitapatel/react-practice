import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/apiEndPoints';

export type Dessert = {
    "strMeal" : string,
    "strMealThumb" : string,
    "idMeal" : string
  }

export default function useFetchDesserts() {
    const [dessert,setDessert] = useState<Dessert[]>([]);

    const fetchDessert = async ()=> {

        const response = await fetch(BASE_URL);
  
        const data = await response.json();
  
        setDessert(data.meals);
      };
  
      useEffect(()=>{
        fetchDessert();
      },[]);

        return dessert;
}
