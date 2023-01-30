import React from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, logOut } from "../firebase";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  console.log(user)

  return (
    <div className="w-full h-16 flex justify-between py-4 px-6 border-gray-200 border-b-2 font-semibold">
      <div className="flex">
        <Link to="/">
          <p>Mini Docs</p>
        </Link>
      </div>
      <div className="flex justify-between ">
        {user ? (
          <div className="flex items-center gap-5">
            <img
              className="h-10 w-10 rounded-full object-contain"
              src={user.photoURL}
              alt=""
            />
            <button onClick={logOut}>Logout</button>
          </div>
        ) : (
          <button onClick={signInWithGoogle}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
