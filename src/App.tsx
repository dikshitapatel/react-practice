import React, { useState } from 'react';
import './App.css';
import { Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UserContext from './contexts/userContext';
import { Provider } from 'react-redux';
import store from './utils/store';
function App() {

    //2 way is it will use from UserContext.Provider if we are suppose setting this from an api

  const [user, setUser] = useState({
      name: "Jainam",
      email: "j@gmail.com"
    
  });

  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      user : user,
      setUser : setUser,
    }}>
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
      </div>  
      
    </UserContext.Provider>
    </Provider>
    );
      
}

export default App;
