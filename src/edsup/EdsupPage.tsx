import { useState } from "react";
import { Fragment } from "react";
import TopBar from "./components/TopBar";
import MainContainer from "./MainContainer";
import ServiciosPersonalizados from "./ServiciosPersonalizados";
import ServiciosFinancieros from "./ServiciosFinancieros";
import Footer from "./components/Footer";
import { Tab } from "./types";

export default function EdsupPage() {
   const [tab, setTab] = useState<Tab>("student");

   return (
      <div className="min-h-screen bg-white">
         <TopBar />
         <div className="p-4">
            <h1
               className="text-center text-[#8AA1B3] font-bold text-lg md:text-xl mb-4"
               style={{ fontFamily: "'Arial', sans-serif", fontSize: "2em", fontWeight: "normal" }}
            >
               Welcome, VALERIA ANAHI ANDRADE/MAQUEDA, to the WWW Information System!
            </h1>
         </div>

         {/* Breadcrumb Navigation */}
         <nav className="px-8 mb-4">
            <div className="text-md text-gray-700">
               <a href="#" className="text-blue-700 hover:underline">
                  Home
               </a>{" "}
               <span className="text-gray-500"> &gt; </span>{" "}
               <a
                  href="#"
                  onClick={() => setTab("student")}
                  className={`text-${tab === "student" ? "gray-700" : "blue-700"} hover:underline`}
               >
                  Student
               </a>{" "}
               {tab !== "student" && (
                  <Fragment>
                     <span className="text-gray-500"> &gt; </span>{" "}
                     {tab === "records" ? (
                        <a href="#" className="text-gray-700 ">
                           Student Records
                        </a>
                     ) : tab === "personalized" ? (
                        <a href="#" className="text-gray-700 ">
                           Servicios Personalizados
                        </a>
                     ) : tab === "financial" ? (
                        <a href="#" className="text-gray-700">
                           Servicios Financieros
                        </a>
                     ) : null}
                  </Fragment>
               )}
            </div>
         </nav>

         {tab === "student" && <MainContainer setTab={setTab} />}
         {tab === "records" && <div>Student Records</div>}
         {tab === "financial" && <ServiciosFinancieros />}
         {tab === "personalized" && <ServiciosPersonalizados />}
         <Footer />
      </div>
   );
}
