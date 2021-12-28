import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css";
import Layout from "../containers/Layout.jsx";
import Login from "../pages/Login.jsx";
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import SendEmail from "../pages/SendEmail.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route path="/send-email" element={<SendEmail />} />
          {/* <Route path="/new-password" component={<NewPassword />} />
          <Route path="/account" component={<MyAccount />} />
          <Route path="/signup" component={<CreateAccount />} />
          <Route path="/checkout" component={<Checkout />} />
          <Route path="/orders" component={<Orders />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
