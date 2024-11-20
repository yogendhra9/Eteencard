import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("authToken");
  console.log(token);

  return (
    <div className="bg-[#91c3fa] w-full p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        <div className="text-3xl font-bold">
          <h1>E-teen-card</h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex justify-end font-bold gap-16">
            <li>
              <Link to="/"> Home</Link>
            </li>
            {!token && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
            {
              token && (
                <>
                <li>
                  Logout
                </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
