import React from 'react'
import '../App.css';
import { addItem } from '../utils/cartSlice';

type DessertCardProps = {
  strMeal: string,
  strMealThumb : string,
  idMeal: string
}
const DessertCard = (props : DessertCardProps) => {



  return (
    <div className='card' id={props.idMeal} data-testid="DessertCard" >
        <img src={props.strMealThumb} alt={props.strMeal}/>
        <h2>{props.strMeal}</h2>
    </div>


  ) 
}
export default DessertCard;
function dispatch(arg0: { payload: any; type: "cart/addItem"; }) {
  throw new Error('Function not implemented.');
}

