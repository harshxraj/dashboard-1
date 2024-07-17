import { useState } from "react";
import { Field, Input, Label, Button } from "@headlessui/react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("trial");
  const [password, setPassword] = useState("assignment123");

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // const apiUrl = "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/login/";
    // const requestBody = {
    //   username: "trial",
    //   password: "assignment123",
    //   email: "string",
    //   phone_number: "string",
    //   input_code: 0,
    // };

    try {
      // const response = await fetch(apiUrl, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(requestBody),
      // });

      // if (!response.ok) {
      //   throw new Error("Network response was not ok.");
      // }

      if (username === "trial" && password === "assignment123") {
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        toast.error("Wrong credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="w-full px-4 border flex flex-col items-center h-screen justify-center">
      <Toaster />
      <h1 className="text-3xl">Login</h1>
      <form onSubmit={handleSubmit}>
        <Field>
          <Label className="text-md font-medium text-black/70">Username</Label>
          <Input
            className={clsx(
              "mt-3 block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black w-[300px]",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Field>

        <Field>
          <Label className="text-md font-medium text-black/70">Password</Label>
          <Input
            type="password"
            className={clsx(
              "mt-3 block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black w-[300px]",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="inline-flex items-center mt-3 gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
