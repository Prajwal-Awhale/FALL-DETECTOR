import React from "react";
import Sidebar from "../pages/Sidebar"; 
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="flex-1 ">
        <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
