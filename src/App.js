import React, { createContext, useReducer, useEffect } from "react";
import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AdminSignin from "./components/AdminSignin";
import AdminSignout from "./components/AdminSignout";
import Addbikes from "./components/dashboardComponents/Addbikes";
import Rentbikereports from "./components/dashboardComponents/Rentbikereports";
import Availableusers from "./components/dashboardComponents/Availableusers";
import Getrentbikes from "./components/dashboardComponents/Getrentbikes";
import Mycart from "./components/Mycart";
import Rentabike from "./components/Rentabike";
import Rentbikecart from "./components/Rentbikecart";
import Rentbikereviews from "./components/Rentbikereviews";
import Signout from "./components/Signout";
import ExploreRentBike from "./components/ExploreRentBike";


import {initialState, reducer} from "../src/reducer/UseReducer"
import {adminInitialState, adminreducer} from "../src/reducer/UseReducerAdmin"




export const UserContext = createContext();
export const AdminContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [adminState, dispatchadmin] = useReducer(adminreducer, adminInitialState)

  
  return (
    <>

      <UserContext.Provider value={{state, dispatch}}>
      <Routes>
      <Route  path="/" element={<Home/>}>
      
      <Route path="/signin" element={<Signin/>}>   
      <Route path="/signup" element={<Signup/>}>  
      <Route path="/signout" element={<Signout/> }>   
      <Route path="/mycart" element={<Mycart/> }>  
        <Route path="/rentbike" element={<Rentabike/> }>  
      <Route path="/rentbikecart" element={<Rentbikecart/> }>   
      <Route path="/rentbikereviews" element={<Rentbikereviews/>}>   
            <Route path="/exploreRentBikes" element={<ExploreRentBike/> }> 
      </Route>
      </Routes>
      </UserContext.Provider>

      <AdminContext.Provider value={{adminState, dispatchadmin}}>
      
      <Routes path="/adminsignin"> <AdminSignin/> </Routes>
      <Routes>
      <Route path="/adminsignout"> <AdminSignout/> </Route>
      <Route path="/dashboard"> <Dashboard/> </Route>
      <Route path="/addbikes"> <Addbikes/> </Route>
      <Route path="/rentbikesreports"> <Rentbikereports/> </Route>
      <Route path="/availableusers"> <Availableusers/> </Route>
      <Route path="/getrentbikesforadmin"> <Getrentbikes/> </Route>
      </Routes>
      </AdminContext.Provider>
      
    </>
  );


}

export default App;
