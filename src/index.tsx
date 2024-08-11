import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import App from './App';
import Body from './components/Body';
import DessertInfo from './components/DessertInfo';
import Carousel from './components/Carousel';
import Ratings from './components/Ratings';
import Pagination from './components/Pagination';
import Accordion from './components/Accordion';
import DataTable from './components/DataTable';
import MUI from './components/MUI';

export const router = createBrowserRouter(
  [
      {
          path:'/',
          element:<App/>,
          children:[
            {
              path:'',
              element:<Body/>,
          },
          {
              path:'about',
              element:<About/>
          },
          {
            path:'carousel',
            element:<Carousel/>
          },
          {
            path:'rating',
            element:<Ratings/>
          },
          {
            path:'pagination',
            element:<Pagination/>
          },
          {
            path:'accordion',
            element:<Accordion/>
          },
          {
            path:'sort',
            element:<DataTable/>
          },
          {
            path:'mui',
            element:<MUI/>
          },
          {
            path: 'dessert/:id',
            element: <DessertInfo/>
          }
  ],
}
  ]
);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
