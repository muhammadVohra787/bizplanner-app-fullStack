import { Routes, Route } from "react-router-dom";

import Home from "./views/home";
import NewIdeas from "./views/NewIdeas";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createnew" element={<NewIdeas />} />
    </Routes>
  );
}

export default App;
