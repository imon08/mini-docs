import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 flex justify-between py-4 px-6 border-gray-200 border-b-2 font-semibold">
      <div className="flex">
        <Link to="/"><p>Mini Docs</p></Link>
      </div>
      <div className="flex justify-between ">
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
