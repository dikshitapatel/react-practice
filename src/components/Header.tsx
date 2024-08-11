import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../contexts/userContext";
import { useSelector } from "react-redux";
import store, { RootState } from "../utils/store";
import { ReducerType } from "@reduxjs/toolkit";
export default function Header() {

  //1 way is it will use from utils if not given user from UserContext.Provider
  const {user, setUser} = useContext(UserContext);
  const cartItems =  useSelector((store : RootState) => store.cart.items);

  return (
    <div className='App-header'>
       <h2><Link to="/about">About</Link></h2>
        <h2><Link to="/carousel">Carousel</Link></h2>
        <h2><Link to="/rating">Rating</Link></h2>
        <h2><Link to="/pagination">Pagination</Link></h2>
        <h2><Link to="/accordion">Accordion</Link></h2>
        <h2><Link to="/sort">Sort</Link></h2>
        <h2><Link to="/mui">MUI</Link></h2>

        <h2>Cart - {cartItems.length}</h2>

        <div>
          <input type="text" value={user.name} onChange={(e)=> setUser({
            ...user,
            name: e.target.value,
          })}
          ></input>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        </div>
    </div>
  )
}
