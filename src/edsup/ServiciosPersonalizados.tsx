import { Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router";
import ContainerHeader from "./components/ContainerHeader";
import ContainerFooter from "./components/ContainerFooter";

export default function ServiciosPersonalizados() {
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
            {/* Lista de enlaces */}
            <div className="rounded-lg max-w-4xl flex flex-col items-start">
               {[
                  "Baja de materias (PRIMAVERA 2025 LICENCIATURA)",
                  "Contactos de emergencia (PRIMAVERA 2025 LICENCIATURA)",
                  "Solicitud de constancias escolares y de credencial (PRIMAVERA 2025 LICENCIATURA)",
                  "Solicitud de Reincorporación (PRIMAVERA 2025 LICENCIATURA)",
                  "Solicitud de renuncia a calificación aprobatoria (PRIMAVERA 2025 LICENCIATURA)",
                  "Status, permisos y planes de estudio para la inscripción (PRIMAVERA 2025 LICENCIATURA)",
                  "Tira de Materias (PRIMAVERA 2025 LICENCIATURA)",
                  "Solicitud de baja temporal o baja total (PRIMAVERA 2025 LICENCIATURA)",
                  "Registro de correo de recuperación (PRIMAVERA 2025 LICENCIATURA)",
                  "Solicitud de Historial Académico de Licenciatura",
               ].map((item, index) => {
                  return (
                     <a
                        onClick={() => {
                           if (
                              item ===
                              "Status, permisos y planes de estudio para la inscripción (PRIMAVERA 2025 LICENCIATURA)"
                           ) {
                              navigate("/edsup/status-planes-permisos");
                           } else if (item === "Tira de Materias (PRIMAVERA 2025 LICENCIATURA)") {
                              navigate("/edsup/tira-materias");
                           } else if (item === "Solicitud de Historial Académico de Licenciatura") {
                              navigate("/edsup/historial-academico");
                           } else {
                              navigate("/edsup/access-denied");
                           }
                        }}
                        key={index}
                        href="#"
                        className=" group block text-blue-600 rounded-md border border-transparent transition-all duration-200"
                     >
                        {item}
                     </a>
                  );
               })}
            </div>
         </div>

         {/* Footer inferior */}
         <ContainerFooter />
      </Fragment>
   );
}
