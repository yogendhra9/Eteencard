import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AUTH_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
 const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const res = await axios.post(
        `${AUTH_API_END_POINT}/sendOtp`,
        { phoneNumber },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      const otpId = res.data.otpId;
      console.log(otpId);
      localStorage.setItem("otpId", otpId);
      toast.success("OTP sent to your phoneNumber");
    } catch (error) {
      toast.error("Unexpected error");
    }
  };

  const handleVerifyOtp = async () => {
    const otpId = localStorage.getItem("otpId");
    if (!otpId) {
      toast.error("OTP verification failed. Please request OTP again.");
      return;
    }
    try {
      const response = await axios.post(
        `${AUTH_API_END_POINT}/VerifyOtp`,
        { otp, otpId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.removeItem("otpId");
      localStorage.setItem("authToken", response);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Otp verification failed");
      alert(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mb-4"
          />
          <Button onClick={sendOtp}>Send OTP</Button>
          <Input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="my-4"
          />
          <Button onClick={handleVerifyOtp} className="w-full">
            Verify OTP
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
