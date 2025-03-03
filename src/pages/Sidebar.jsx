import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaMobileAlt, FaPlus, FaSignOutAlt, FaEllipsisV, FaCog, FaUserCircle } from "react-icons/fa";

function Sidebar() {
  
  const [isOpen, setIsOpen] = useState(true);
  const bgColor = "bg-blue-700"; 
  const hoverColor = "hover:bg-blue-500"; 
  const textColor = "text-white"; 

  return (
    <div className={`h-screen  ${isOpen ? "w-64" : "w-20"} ${bgColor} ${textColor} p-4 transition-all duration-300 flex flex-col`}>
      <div className="flex items-center justify-between mb-6">
        {isOpen && <h2 className="text-lg font-bold">Dashboard</h2>}
        <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <FaEllipsisV />
        </button>
      </div>

      <div className="flex flex-col items-center mb-6">
        <FaUserCircle className="text-5xl" />
        {isOpen && <p className="mt-2 text-sm">John Doe</p>}
      </div>

      <nav className="flex flex-col space-y-4">
        <NavLink to="/profile" className={`flex items-center space-x-3 p-3 rounded-lg ${hoverColor}`}>
          <FaUser />
          {isOpen && <span>Profile</span>}
        </NavLink>
        
        <NavLink to="/devices" className={`flex items-center space-x-3 p-3 rounded-lg ${hoverColor}`}>
          <FaMobileAlt />
          {isOpen && <span>Devices</span>}
        </NavLink>
        
        <NavLink to="/add-numbers" className={`flex items-center space-x-3 p-3 rounded-lg ${hoverColor}`}>
          <FaPlus />
          {isOpen && <span>Add Numbers</span>}
        </NavLink>

        <NavLink to="/settings" className={`flex items-center space-x-3 p-3 rounded-lg ${hoverColor}`}>
          <FaCog />
          {isOpen && <span>Settings</span>}
        </NavLink>

        <NavLink to="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-600 mt-auto">
          <FaSignOutAlt />
          {isOpen && <span>Logout</span>}
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
