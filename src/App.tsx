import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/shared/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/student/Dashboard";
import Home from "./components/comman/Home";
import Login from "./components/comman/Login";
import Examstart from "./components/student/Examstart";
import Examprogres from "./components/student/Examprogres";
import Examresult from "./components/student/Examresult";
import QsAdd from "./components/teacher/QsAdd";
import QsList from "./components/teacher/QsList";
import QsEddit from "./components/teacher/QsEddit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/examstart" element={<Examstart />} />
          <Route path="/examprogres" element={<Examprogres />} />
          <Route path="/examresult" element={<Examresult />} />
          <Route path="/qsadd" element={<QsAdd />} />
          <Route path="/qslist" element={<QsList />} />
          <Route path="/qsedit" element={<QsEddit />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
