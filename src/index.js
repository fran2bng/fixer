import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./routes/Login";
import Home from "./routes/Home";
import { Router } from "react-router-dom";
import Turns from "./routes/turns";
import { User } from "firebase/auth";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <div>



  <BrowserRouter>
    <Routes>

      
      <Route path="/" element= { <Login/>  } />
      
      <Route path="/home" element= {<Home/>} />
      
      <Route path="/turns" element= { <Turns/> } />


    </Routes> 
  </BrowserRouter>




</div>

  </Provider>
);
