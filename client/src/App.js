import { Routes, Route } from "react-router-dom";
import NotFound1 from "./views/not-found";
import Home from "./views/home";
import NewIdeas from "./views/NewIdeas";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { useAuthLogging } from "./components/AuthComponent";

function App() {
  useAuthLogging()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound1 />} />
      <Route element={<AuthOutlet fallbackPath="/
      " />}>
        <Route path="/newIdea" element={<NewIdeas />} />
      </Route>
    </Routes>
  );
}

export default App;
