import React, { useEffect } from "react";
import gsap from "gsap";
import { Button } from "./ui/button.jsx";
import { Link } from "react-router-dom";
const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".header",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  });
  return (
    <div>
      <section className="text-center py-10 bg-gray-100">
        <h1 className=" header text-3xl font-bold">Welcome to E-Teen Card</h1>
        <p className=" header text-lg my-4">
          The smart identity card for the modern teenager!
        </p>
        <div className="flex justify-center my-6">
          <Button className="bg-blue-500 text-white px-6 py-2 rounded mr-4">
            <Link to="/create">Create Card</Link>
          </Button>
          <Button className="bg-green-500 text-white px-6 py-2 rounded">
            View Card
          </Button>
        </div>
      </section>
      );
    </div>
  );
};

export default HeroSection;
