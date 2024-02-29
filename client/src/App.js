import { Routes, Route } from "react-router-dom";
import NotFound1 from "./views/not-found";
import Home from "./views/home";
import NewIdeas from "./views/NewIdeas";
import SignIn from "./components/SignInModal";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createnew" element={<NewIdeas />} />
      <Route path="*" element={<NotFound1 />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
