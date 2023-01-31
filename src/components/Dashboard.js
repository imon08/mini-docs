import React, { useState } from "react";

const Dashboard = () => {
  const array = ["donkey", "rabbit", "dolphin", "shark", "cat", "penguin"];
  const [head, sethead] = useState(array[0]);

  const handleClick = (item) => {
    sethead(item);
  };

  console.log(head)
  return (
    <div className="flex">
      <div className="w-[20%] bg-gray-200 min-h-screen">
        {array.map((item) => {
          return (
            <div onClick={() => handleClick(item)} className="p-2 hover:bg-white cursor-pointer flex gap-2">
              <img
                className="w-4 h-6"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png"
                alt=""
              />
              <p value={head}>
                {item}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center w-[80%] text-3xl">
        <p className="p-2">{head}</p>
      </div>
    </div>
  );
};

export default Dashboard;
