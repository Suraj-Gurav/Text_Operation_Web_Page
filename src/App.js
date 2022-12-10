import React from "react";
import { BrowserRouter,Route, Routes} from "react-router-dom";
import About from './components/About';
import Main from "./components/Main";

const App=()=>{
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;

