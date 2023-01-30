import React from "react";

const Dashboard = () => {
  const array = ["fndiuf", "dgd", "dfndkj","dfndhro"]
  return (
    <div>
      <div className="w-[20%] bg-gray-200 min-h-screen">
        {
          array.map((item)=>{
            return (
              <p>{item}</p>
            )
          })
        }
      </div>
    </div>
  );
};

export default Dashboard;
