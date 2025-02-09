import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";
import ContainerHeader from "./components/ContainerHeader";
import ContainerFooter from "./components/ContainerFooter";

export default function ServiciosFinancieros() {
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
            {/* Lista de enlaces */}
            <div className="rounded-lg max-w-4xl flex flex-col items-start">
               {[
                  "Acceso a Estacionamiento",
                  "Actualización de datos fiscales",
                  "Configuración de Privacidad de Información Financiera",
                  "Consulta de Saldos",
               ].map((item, index) => {
                  return (
                     <Link
                        key={index}
                        className=" group block text-blue-600 rounded-md border border-transparent transition-all duration-200"
                        to={`${item === "Consulta de Saldos" ? "/edsup/consulta-saldos" : "/edsup/access-denied"}`}
                     >
                        {item}
                     </Link>
                  );
               })}
            </div>
         </div>

         {/* Footer inferior */}
         <ContainerFooter />
      </Fragment>
   );
}
