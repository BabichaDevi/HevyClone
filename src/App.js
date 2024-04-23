import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Product from "./Pages/Product";
import Home from "./Pages/Home";



function App() {
  return (
    <div>
        <Navbar/>


          <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/AboutUs" element = {<AboutUs/>} />
            <Route path="/Product" element = {<Product/>} />
            

          </Routes>
    </div>
  );
}

export default App;
