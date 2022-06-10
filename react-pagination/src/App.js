import "./App.css";
import React from "react";
import EventTKS from "./components/events";
import Viagogo from "./components/Viagogo";
import HomeSelection from "./components/HomeSelection";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EventEdit from "./components/EventEdit";


function App() {
  console.log('APP')
  return (
    <>
    <div className="main-page">
      <Routes>
        <Route path="/" element={<HomeSelection/>}/>
        <Route path="/tickettek" element={<EventTKS/>}/>
        <Route path="/tickettek">
          <Route path=":id" element={<EventEdit/>}/>
        </Route>
        <Route path="/viagogo" element={<Viagogo/>}/>
      </Routes>

    </div>
    </>
  );

}

export default React.memo(App);
