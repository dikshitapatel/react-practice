import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DESSERT_URL } from '../constants/apiEndPoints';
interface Ingredient {
  ingredient: string;
  measure: string;
}

interface DessertDetails{
    idMeal: string;
    strMeal: string;
    strDrinkAlternate: string | null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    ingredients: Ingredient[];
    strSource: string;
    strImageSource: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string | null;

}

export const useDessertInfo = (id: any) => {
    const [dessertInfo, setDessertInfo] = useState<DessertDetails | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(DESSERT_URL+id);
        const data = await response.json();
  
        if (data.meals) {
          const meal = data.meals[0];
          console.log(meal);
          const ingredients: Ingredient[] = [];
  
          Object.keys(meal).forEach((key) => {
            if (key.startsWith('strIngredient') && meal[key]) {
              const index = key.replace('strIngredient', '');
              const ingredient = meal[key];
              const measure = meal[`strMeasure${index}`];
              ingredients.push({ ingredient, measure });
            }
          });
  
          const transformedData: DessertDetails = {
            idMeal: meal.idMeal,
            strMeal: meal.strMeal,
            strDrinkAlternate: meal.strDrinkAlternate,
            strCategory: meal.strCategory,
            strArea: meal.strArea,
            strInstructions: meal.strInstructions,
            strMealThumb: meal.strMealThumb,
            strTags: meal.strTags,
            strYoutube: meal.strYoutube,
            ingredients,
            strSource: meal.strSource,
            strImageSource: meal.strImageSource,
            strCreativeCommonsConfirmed: meal.strCreativeCommonsConfirmed,
            dateModified: meal.dateModified,
          };
  
          setDessertInfo(transformedData);
        }
      };
  
      fetchData();
    }, [id]);
  
    return dessertInfo;
  }

