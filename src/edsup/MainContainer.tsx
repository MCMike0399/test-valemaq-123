import { Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router";
import { Dispatch, SetStateAction } from "react";
import { Tab } from "./types";
import ContainerHeader from "./components/ContainerHeader";
import ContainerFooter from "./components/ContainerFooter";

type Props = {
   setTab: Dispatch<SetStateAction<Tab>>;
};

export default function MainContainer({ setTab }: Props) {
   const navigate = useNavigate();
   return (
      <Fragment>
         {/* Botones de selección */}
         <ContainerHeader />

         {/* Contenedor principal */}
         <div
            className="bg-[#f3f4f6] mx-4 rounded-lg shadow-md p-8 min-h-[400px]"
            style={{
               fontFamily: "'Arial', Helvetica, sans-serif",
               fontSize: "15px",
               lineHeight: "1.5",
            }}
         >
            {/* Contenido de la tabla */}
            <div className="rounded-lg max-w-6xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-items-stretch">
                  {/* Student Records */}
                  <div
                     onClick={() => navigate("/edsup/access-denied")}
                     className="bg-[#ebf5f8] rounded-md p-4 border border-[#cbd5e1] flex flex-col max-w-sm group"
                  >
                     <a href="#">
                        <h3 className="text-[#2d556e] font-semibold mb-3 text-[15px] group-hover:text-[#f59b41]">
                           Student Records
                        </h3>
                        <div className="text-[#555555] text-[14px] space-y-2 leading-tight flex-grow">
                           <p>View your holds;</p>
                           <p>Display your grades and transcripts;</p>
                           <p>Review charges and payments.</p>
                        </div>
                     </a>
                  </div>

                  {/* Servicios Personalizados */}
                  <div
                     onClick={() => setTab("personalized")}
                     className="bg-[#ebf5f8] rounded-md p-4 border border-[#cbd5e1] flex flex-col max-w-sm group"
                  >
                     <a href="#">
                        <h3 className="text-[#2d556e] font-semibold mb-3 text-[15px] group-hover:text-[#f59b41]">
                           Servicios Personalizados
                        </h3>
                        <div className="flex-grow">
                           <br />
                           <br />
                           <br />
                        </div>{" "}
                        {/* Espaciador vertical */}
                     </a>
                  </div>

                  {/* Servicios Financieros */}
                  <div
                     onClick={() => setTab("financial")}
                     className="bg-[#ebf5f8] rounded-md p-4 border border-[#cbd5e1] flex flex-col max-w-sm group"
                  >
                     <a href="#">
                        <h3 className="text-[#2d556e] font-semibold mb-3 text-[15px] group-hover:text-[#f59b41]">
                           Servicios Financieros
                        </h3>
                        <div className="text-[#555555] text-[14px] space-y-2 leading-tight flex-grow">
                           <p>Consulta tu Estado de Cuenta;</p>
                           <p>Revisa los pagos de la primera exhibición;</p>
                           <p>Realiza el primer paso de inscripción.</p>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         {/* Footer inferior */}
         <ContainerFooter />
      </Fragment>
   );
}
