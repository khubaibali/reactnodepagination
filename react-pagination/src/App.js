import "./App.css";
import EventTKS from "./components/events";
import Viagogo from "./components/Viagogo";
import HomeSelection from "./components/HomeSelection";
import { Routes, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <>
    <div className="main-page">
      <Routes>
        <Route path="/" element={<HomeSelection/>}/>
        <Route path="/tickettek" element={<EventTKS/>}/>
        <Route path="/viagogo" element={<Viagogo/>}/>
      </Routes>

    </div>
    </>
  );

}

export default App;
