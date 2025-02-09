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
         <Route path="/test-valemaq-123" element={<h1>Hola Mundo</h1>} />
         <Route path="/test-valemaq-123/edsup" element={<EdsupPage />} />
         <Route path="/test-valemaq-123/edsup/consulta-saldos" element={<ServiciosFinancieros />} />
         <Route path="/test-valemaq-123/edsup/status-planes-permisos" element={<StatusPlanesPermisos />} />
         <Route path="/test-valemaq-123/edsup/tira-materias" element={<TiraMaterias />} />
         <Route path="/test-valemaq-123/edsup/historial-academico" element={<HistorialAcademico />} />
         <Route path="/test-valemaq-123/edsup/access-denied" element={<AccessDenied />} />
      </Routes>
   );
}
