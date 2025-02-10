import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import ItamIcon from "@/assets/topbar/sgu-logo.png";
import { AuthContext } from "../AuthContext";

export default function LoginPage() {
   const { setIsAuthenticated } = useContext(AuthContext);
   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const timeOutPromise = async (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      await timeOutPromise(2000);
      setIsLoading(false);
      if (username === "vandrad7@itam.mx" && password === "Valiwis2003.") {
         setIsAuthenticated(true);
         navigate("/edsup");
      }
      setUsername("");
      setPassword("");
   };
   return (
      <div className="min-h-screen bg-[#3c3f3e] flex items-start justify-center pt-20">
         {/* Contenedor blanco */}
         <div className="bg-white shadow-md w-[600px] rounded relative">
            {/* Logo ITAM y franja verde */}
            <div className="flex items-center p-4">
               <img src={ItamIcon} alt="ITAM Logo" className="h-10" />
            </div>
            <div className="h-[14px] bg-[#016852]" />

            {/* Formulario */}
            <div className="p-6">
               <h1 className="text-xl font-semibold mb-4">Sign in to your account</h1>

               {/* Fila de inputs y botón */}
               <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-3">
                  <input
                     onChange={(e) => setUsername(e.target.value)}
                     type="text"
                     placeholder="Username"
                     className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-[#016852] flex-1"
                  />
                  <input
                     type="password"
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                     className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-[#016852] flex-1"
                  />
                  <button
                     disabled={isLoading}
                     type="submit"
                     className="bg-[#016852] hover:bg-[#014f3f] text-white px-4 py-1 rounded"
                  >
                     {isLoading ? "Loading..." : "Sign in"}
                  </button>
               </form>

               {/* Recordar y links */}
               <div className="mb-2">
                  <label className="inline-flex items-center text-sm">
                     <input type="checkbox" className="form-checkbox h-4 w-4 text-[#016852] mr-1" />
                     Remember me on this computer
                  </label>
               </div>
               <div className="text-sm">
                  Forgot <a className="text-blue-600 hover:underline">Username</a> or{" "}
                  <a className="text-blue-600 hover:underline">Password</a> ?
               </div>
            </div>
         </div>
      </div>
   );
}
