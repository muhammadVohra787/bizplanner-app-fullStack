import { Routes, Route } from "react-router-dom";
import NotFound1 from "./views/not-found";
import Home from "./views/home";
import SecureRoute1 from "./views/SecureRoute1";
import SecureRoute2 from "./views/SecureRoute2";
import PublicRoute from "./views/PublicRoute";
import PublicRoute2 from "./views/PublicRoute2";
import SignIn from "./views/SignInPage";
import PrivateRoutes from "./PrivateRoutes";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound1 />} />
      <Route path="/login" element={<SignIn />} />
      <Route element={<PrivateRoutes />}>
        <Route
          element={<SecureRoute1 text={"Welcome to Secure Route #1"} />}
          path="/secureroute1"
          exact
        />
        <Route
          element={<SecureRoute2 text={"Welcome to Secure Route #2"} />}
          path="/secureroute2"
          exact
        />
      </Route>
      <Route
        element={<PublicRoute text={"Welcome to Public Route #1"} />}
        path="publicroute1"
      />
      <Route
        element={<PublicRoute2 text={"Welcome to Public Route #2"} />}
        path="publicroute2"
      />
    </Routes>
  );
}

export default App;
