import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between p-16 items-center h-screen">
      <div className="w-[80%]">
        <p className="text-5xl font-semibold mb-4">Mini Docs</p>
        <p >A lite version of your google drive</p>

        <div className="border-black border-2 w-fit mt-5 rounded-md px-7 py-2 bg-blue-900 text-white">
            <Link to="/dashboard"><button>Dashboard</button></Link>
        </div>
      </div>
      <div className="w-[30%]">
        <img className=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
 