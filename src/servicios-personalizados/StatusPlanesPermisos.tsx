import TopBar from "../edsup/components/TopBar";
import Footer from "../edsup/components/Footer";
import ContainerHeader from "../edsup/components/ContainerHeader";
import UserInfo from "../edsup/components/UserInfo";

export default function StatusPlanesPermisos() {
   return (
      <div className="min-h-screen bg-white">
         <TopBar />
         <ContainerHeader />
         <div
            className="bg-[#f3f4f6] mx-4 rounded-lg shadow-md p-4"
            style={{ fontFamily: "'Arial', Helvetica, sans-serif", fontSize: "15px" }}
         >
            <UserInfo />
            <div className="bg-[#067760] w-full h-[20px]"></div>
            <div className="flex gap-4 mt-4">
               <span className="font-semibold">
                  Los boletines para el programa de INGENIERÍA EN COMPUTACIÓN son los siguientes:
               </span>
            </div>
            <div className="flex gap-4 mt-4">
               <a
                  className="text-blue-600 "
                  href="http://escolar.itam.mx/licenciaturas/boletines/COM-I.pdf"
                  target="_blank"
                  rel="noreferrer"
               >
                  Para los alumnos que ingresaron a partir de Primavera 2021 (COM-I)
               </a>
            </div>
            <div className="flex gap-4 mt-2">
               <a
                  className="text-blue-600 "
                  href="http://escolar.itam.mx/licenciaturas/boletines/Darle.pdf"
                  target="_blank"
                  rel="noreferrer"
               >
                  Información general sobre el departamento de Lenguas
               </a>
            </div>
         </div>
         <Footer />
      </div>
   );
}
