import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { gsap } from "gsap";
import Navbar from "./shared/Navbar";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    aadhaarNumber: "",
    
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  //   useEffect(() => {
  //     gsap.from(".form-container", { opacity: 0, y: -50, duration:  });
  //     gsap.from(".form-input", { opacity: 0, x: -100, stagger: 0.2, duration: 1 });
  //     gsap.from(".submit-btn", { opacity: 0, y: 50, duration: 1 });
  //   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/profile", formData);
      console.log(response.data);
      navigate("/view-profile");
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container p-6 max-w-lg mx-auto my-9 bg-white rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Create Profile</h2>
        <form onSubmit={handleSubmit}>
          <Input
            className="form-input mb-4"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            className="form-input mb-4"
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
          <Input
            className="form-input mb-4"
            type="text"
            placeholder="Aadhaar Number"
            value={formData.aadhaarNumber}
            onChange={(e) =>
              setFormData({ ...formData, aadhaarNumber: e.target.value })
            }
          />
          <Input
            className="form-input mb-4"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {/* <Input
            className="form-input mb-4"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          /> */}
          <div>
           <p>
            Profile Photo
           </p>
           <Input
           className="form-input mb-4"
           type="file"
           placeholder="Profile photo"
           value ={formData.photo}
           onChange= {(e)=>
            setFormData({...})
           }

           />
          </div>
          <Button className="submit-btn mt-4 " type="submit" >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateProfile;
