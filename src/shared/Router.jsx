import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Spinner } from "../features/ui";
import Home from "../pages/Home";
import Write from "../pages/Write";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Setting from "../pages/Setting";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<Spinner />}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
};

export default Router;
