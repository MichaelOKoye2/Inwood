import Footer from "./pages/footer";
import Header from "./pages/header";
import Landingpage from "./pages/landingpage";
import Login from "./pages/login";
import Register from "./pages/Register";
import Homepage from "./pages/homepage";
import Products from "./pages/products";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <main>
      <BrowserRouter>
        <div className="App">
        {/* <Header/> */}
        {/* <Landingpage/> */}
        <Routes>
           <Route path="/" element={ <Landingpage />} />
           <Route path="/Register" element={ <Register />} />
           <Route path="/Login" element={ <Login />} /> 
           <Route path="/Homepage" element={<Homepage/>} />
           <Route path="/Products" element={<Products/>}/>
        </Routes>
      </div>
    <Footer/>
    
      </BrowserRouter>
    </main>

  );
}

export default App;
