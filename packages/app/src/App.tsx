import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./Header";

export default function App(): React.ReactElement {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:4000/postings");
      console.log(response.data);
    }

    fetchData();
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>qweqwe</div>} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}
