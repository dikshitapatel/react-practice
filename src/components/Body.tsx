import React, { useEffect, useState } from 'react'
import DessertCard from './DessertCard';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants/apiEndPoints';
import useDebounce from '../contexts/useDebounce';
import useFetchDesserts, { Dessert } from '../hooks/useFetchDesserts';

export default function Body() {

  const desserts = useFetchDesserts();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue,300);
  const [results, setResults] = useState<Dessert[]>([]);


  useEffect(()=>{
     const data : Dessert[] = desserts.filter((dessert)=>
        dessert.strMeal.toLowerCase().includes(debouncedSearchValue.toLowerCase())
      );
      setResults(data);
  },[debouncedSearchValue,desserts]);
  
  return (
    <div className='App-body'>
      <div>
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        style={{
          padding: '10px', // Adjust padding as needed
          fontSize: '16px', // Example: Adjust font size
          borderRadius: '4px', // Example: Rounded corners
          border: '1px solid #ccc', // Example: Light border
          width: '300px', // Example: Fixed width
        }}
      />
    </div>

    {results.length > 0 ? (
          <div>
            <h3>Filtered Results:</h3>
            <div className='dessert-list'>
              {results.map((dessert) => (
                 <Link
                 to={"/dessert/" + dessert.idMeal}
                 key={dessert?.idMeal}
                >
                 <DessertCard {...dessert}/>
                 </Link>
              ))}  
              </div>         
          </div>
        ) : (
          <div>
            <h3>All Desserts:</h3>
            <div className='dessert-list'>
            {desserts.map((dessert) => (
               <Link
               to={"/dessert/" + dessert.idMeal}
               key={dessert?.idMeal}
              >
             <DessertCard data-testid="DessertCard" {...dessert}/>
             </Link>
            ))}
            </div>
          </div>
        )}
    </div>
       
     
  );
}
