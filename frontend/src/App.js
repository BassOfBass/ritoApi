import React, { useState } from "react";

import "./App.css"
import { Search } from "./components/Search";
import { Navbar } from "./components/Navbar";
import { History } from "./components/History";


const App = () => {
 
  const [page, setPage] = useState('Home')

 
  return (
    <div>
    <Navbar setPage={setPage} />
        <div className="content">
           {page === 'Home' ? <Search/> : <History/>}   
        </div>


    
  </div>);
};

export default App;

