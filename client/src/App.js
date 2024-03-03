import { Routes, Route } from "react-router-dom";
import NotFound1 from "./views/not-found";
import Home from "./views/home";
import NewIdeas from "./views/NewIdeas";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import FallBackLogin from "./views/FallBackLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound1 />} />
      <Route path="/login" element={<FallBackLogin />} />
      <Route
        element={
          <AuthOutlet
            fallbackPath="/login"
          />
        }
      >
        <Route path="/newIdea" element={<NewIdeas />} />
      </Route>
    </Routes>
  );
}

export default App;
