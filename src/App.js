import Header from "./Components/shared/Header";
import Categories from "./Components/shared/Categories";
import Imagescarousel from "./Components/shared/Imagescarousel";
import LandingScreenUser from "./Components/UserSide/LandingScreenUser";

import BabyCream from "./Components/UserSide/BabyCream";

import Login from "./Components/UserSide/Login";
import Register from "./Components/UserSide/Register";
import Cart from "./Components/UserSide/Cart";
import Listitems from "./Components/UserSide/Listitems";
import { Route, Routes } from "react-router";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/shared/Footer";
import SearchResults from "./Components/UserSide/SearchResults";
import AdminLandinScreen from "./Components/AdminSide/AdminLandinScreen";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />}></Route>

          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="landingscreen"
            element={<LandingScreenUser />}
          ></Route>
          <Route exact path="listitems" element={<Listitems />}></Route>
          <Route exact path="cart" element={<Cart />}></Route>
          <Route exact path="babycream" element={<BabyCream />}></Route>
          <Route exact path="searchresults" element={<SearchResults />}></Route>
          <Route exact path="admin" element={<AdminLandinScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
