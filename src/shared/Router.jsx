import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/testresultpage" element={<TestResultPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
