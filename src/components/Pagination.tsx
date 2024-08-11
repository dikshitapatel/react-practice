import React, {useState } from 'react'
import useFetchDesserts from '../hooks/useFetchDesserts';


export default function Pagination() {

  const dessert = useFetchDesserts();
  const [index,setIndex] = useState(1);


  const selectPage = (selectedPage : number) =>{
    if(selectedPage>=1 && selectedPage <= dessert.length/10 && selectedPage!=index){
      setIndex(selectedPage);
    }
  }

  return (
    <div className="App-body">
      {dessert.length  > 0 && <div className="dessert-flex">
        {
        dessert.slice(index*10-10,index*10).map((d) => {
          return (
              <img src={d.strMealThumb} alt={d.strMeal}/>
          );

        })}
      
    </div>  
  }
  <div>
    { dessert.length>0 && <div className="pagination">
  <button onClick={()=>selectPage(index-1)}>Prev</button>
  {[...Array(Math.ceil(dessert.length/10))].map((_,i)=>{
    return(
      <span onClick={()=> selectPage(i+1)}> {i+1}</span>
    );
  })
  }
  <button onClick={()=>selectPage(index+1)}>Next</button>
  </div>
}
</div>
    </div>
  )
  

}

