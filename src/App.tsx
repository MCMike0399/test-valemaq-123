import { Routes, Route } from "react-router";
import EdsupPage from "./edsup/EdsupPage";
import ServiciosFinancieros from "./servicios-financieros/ConsultaSaldos";
import StatusPlanesPermisos from "./servicios-personalizados/StatusPlanesPermisos";
import TiraMaterias from "./servicios-personalizados/TiraMaterias";
import HistorialAcademico from "./servicios-personalizados/HistorialAcademico";
import AccessDenied from "./edsup/AccessDenied";

export default function App() {
   return (
      <Routes>
         <Route path="/" element={<h1>Hola Mundo</h1>} />
         <Route path="/edsup" element={<EdsupPage />} />
         <Route path="/edsup/consulta-saldos" element={<ServiciosFinancieros />} />
         <Route path="/edsup/status-planes-permisos" element={<StatusPlanesPermisos />} />
         <Route path="/edsup/tira-materias" element={<TiraMaterias />} />
         <Route path="/edsup/historial-academico" element={<HistorialAcademico />} />
         <Route path="/edsup/access-denied" element={<AccessDenied />} />
      </Routes>
   );
}
