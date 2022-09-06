import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./App.css";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meta" element={<Index />} />
        <Route path="/meta/new" element={<New />} />
        <Route path="/meta/:id" element={<Show />} />
        <Route path="/meta/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
