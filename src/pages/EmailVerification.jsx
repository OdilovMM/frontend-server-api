import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import verifyImg from "../assets/verify.png";

const EmailVerification = () => {
  const [status, setStatus] = useState(false);
  const [counter, setCounter] = useState(5); 
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (status) {
      timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      if (counter === 0) {
        navigate("/login");
        console.log("hi");
      }
    }
    return () => clearInterval(timer);
  }, [counter, status, navigate]);

  useEffect(() => {
    const query = new URLSearchParams(search);
    const verifyToken = query.get("token");
    const email = query.get("email");

    const verifyEmail = async () => {
      try {
        await customFetch.post("/auth/email-verification", {
          verifyToken,
          email,
        });
        setStatus(true);
      } catch (error) {
        setStatus(false);
      }
    };

    if (verifyToken && email) {
      verifyEmail();
    }
  }, [search, navigate]);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-primary text-3xl">Email Verification</h1>
      {status ? (
        <>
          <h1 className="bg-success-content ">
            Email verification is successful! Redirecting ...in {counter}
          </h1>
        </>
      ) : (
        <h1>Verification failed. Please try again.</h1>
      )}
      <img src={verifyImg} className="h-[120px]" alt="Verification" />
    </div>
  );
};

export default EmailVerification;
