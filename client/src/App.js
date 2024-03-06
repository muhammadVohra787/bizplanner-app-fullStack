import { Routes, Route } from "react-router-dom";
import NotFound1 from "./views/not-found";
import Home from "./views/home";
import SecureRoute1 from "./views/SecureRoute1";

import PublicRoute from "./views/PublicRoute";
import SignIn from "./views/SignInPage";
import PrivateRoutes from "./PrivateRoutes";
import ChangePassword from "./views/ChangePassword";
import ForgotPasswordPage from "./views/ForgotPasswordPage";
import TokenVerify from "./components/userInput/TokenVerification";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound1 />} />
      <Route path="/login" element={<SignIn />} />
      <Route
        element={<PublicRoute text={"Welcome to Public Route"} />}
        path="publicroute1"
      />
      <Route element={<ForgotPasswordPage />} path="/forgotPassword" />
      <Route element={<TokenVerify/>} path="/cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e8350e5a3e24c153df2275c9f80692773/:email"/>
      {/* Secure Routes */}
      <Route element={<PrivateRoutes />}>
        <Route
          element={<SecureRoute1 text={"Welcome to Secure Route"} />}
          path="/secureroute1"
          exact
        />
        <Route element={<ChangePassword />} path="/changePass" exact />
      </Route>
      {/* Secure Routes Ends here*/}
    </Routes>
  );
}

export default App;
