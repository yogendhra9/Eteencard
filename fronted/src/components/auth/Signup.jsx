import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const Signup = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    fullName: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      console.log("Submitting form with data:", formData); // Log the form data

      const response = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData
      );

      console.log("Response from backend:", response.data.message); 
      // Log backend response

      // Check if the response contains data and show a success message
      if (response.data?.message) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      alert(
        "Error during registration:",
        error.response?.data || error.message
      );

      // Handle backend error response
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <Input
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            className="mb-4"
          />
          <Input
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="mb-4"
          />
          <Input
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mb-4"
          />
          <Button onClick={handleSubmit} className="w-full">
            SignUp
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
