export default function HistorialAcademico() {
   // Obtiene la fecha y hora actual
   const now = new Date();
   const formattedDate = now.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
   const formattedTime = now.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
   });
   const rows = [
      // Cada objeto representa una fila de la tabla
      { clave: "1000", curso: "", calificacion: "", observaciones: "" },
      { clave: "000 00000", curso: "CURSO VERIFICA AREA PREREQ.", calificacion: "-06", observaciones: "" },
      { clave: "", curso: "ENERO - MAYO / 2021", calificacion: "", observaciones: "" },
      {
         clave: "* MAT 14051",
         curso: "PROPEDEUTICO DE MATEMATICAS. UNIDAD I",
         calificacion: "10 (diez)",
         observaciones: "MATERIA ADICIONAL",
      },
      {
         clave: "* MAT 14052",
         curso: "PROPEDEUTICO DE MATEMATICAS. UNIDAD II",
         calificacion: "10 (diez)",
         observaciones: "MATERIA ADICIONAL",
      },
      {
         clave: "* MAT 14053",
         curso: "PROPEDEUTICO DE MATEMATICAS. UNIDAD III",
         calificacion: "NA (no acreditado)",
         observaciones: "MATERIA ADICIONAL",
      },
      {
         clave: "P PL01",
         curso: "EX. PROP. INGLES PARA LIC.",
         calificacion: "AC (acreditado)",
         observaciones: "EXAMEN CLASIFICACION",
      },
      { clave: "", curso: "VERANO / 2021", calificacion: "", observaciones: "" },
      {
         clave: "* MAT 14001",
         curso: "INTRODUCCION A LAS MATEMATICAS SUPERIORES",
         calificacion: "10 (diez)",
         observaciones: "MATERIA ADICIONAL",
      },
      {
         clave: "* MAT 14053",
         curso: "PROPEDEUTICO DE MATEMATICAS. UNIDAD III",
         calificacion: "10 (diez)",
         observaciones: "MATERIA ADICIONAL",
      },
      { clave: "", curso: "AGOSTO - DICIEMBRE / 2021", calificacion: "", observaciones: "" },
      { clave: "COM 11101", curso: "ALGORITMOS Y PROGRAMAS", calificacion: "10 (diez)", observaciones: "" },
      {
         clave: "EGN 17121",
         curso: "IDEAS E INSTITUCIONES POLITICAS Y SOCIALES I",
         calificacion: "7 (siete)",
         observaciones: "",
      },
      { clave: "LEN 12701", curso: "ESTRATEGIAS DE COMUNICACION ESCRITA", calificacion: "8 (ocho)", observaciones: "" },
      { clave: "MAT 14100", curso: "CALCULO DIFERENCIAL E INTEGRAL I", calificacion: "7 (siete)", observaciones: "" },
      {
         clave: "MAT 14200",
         curso: "GEOMETRIA ANALITICA (GEOMETRIA ANALITICA I)",
         calificacion: "9 (nueve)",
         observaciones: "",
      },
      { clave: "SDI 1415", curso: "INTRODUCCION A LA INGENIERIA", calificacion: "9 (nueve)", observaciones: "" },
      { clave: "", curso: "ENERO - MAYO / 2022", calificacion: "", observaciones: "" },
      {
         clave: "P CNFE",
         curso: "CONFERENCIA LIC",
         calificacion: "AC (acreditado)",
         observaciones: "EXAMEN CLASIFICACION",
      },
      {
         clave: "P CNFI",
         curso: "CONFERENCIA LIC",
         calificacion: "AC (acreditado)",
         observaciones: "EXAMEN CLASIFICACION",
      },
      {
         clave: "EGN 17122",
         curso: "IDEAS E INSTITUCIONES POLITICAS Y SOCIALES II",
         calificacion: "8 (ocho)",
         observaciones: "",
      },
      {
         clave: "EGN 17141",
         curso: "PROBLEMAS DE LA CIVILIZACION CONTEMPORANEA I",
         calificacion: "7 (seis)",
         observaciones: "",
      },
      { clave: "MAT 14101", curso: "CALCULO DIFERENCIAL E INTEGRAL II", calificacion: "7 (siete)", observaciones: "" },
      {
         clave: "MAT 14201",
         curso: "ALGEBRA LINEAL I (GEOMETRIA ANALITICA II)",
         calificacion: "8 (ocho)",
         observaciones: "",
      },
      { clave: "", curso: "AGOSTO - DICIEMBRE / 2022", calificacion: "", observaciones: "" },
      { clave: "COM 11102", curso: "ESTRUCTURAS DE DATOS", calificacion: "7 (siete)", observaciones: "" },
      {
         clave: "EGN 17123",
         curso: "IDEAS E INSTITUCIONES POLITICAS Y SOCIALES III",
         calificacion: "8 (ocho)",
         observaciones: "",
      },
      { clave: "IO 15130", curso: "FUNDAMENTOS DE QUIMICA", calificacion: "9 (siete)", observaciones: "" },
      { clave: "LEN 12702", curso: "SEMINARIO DE COMUNICACION ESCRITA", calificacion: "9 (nueve)", observaciones: "" },
      { clave: "", curso: "ENERO - MAYO / 2023", calificacion: "", observaciones: "" },
      { clave: "COM 11103", curso: "ESTRUCTURAS DE DATOS AVANZADAS", calificacion: "9 (nueve)", observaciones: "" },
      { clave: "ECO 11001", curso: "ECONOMIA I", calificacion: "8 (ocho)", observaciones: "" },
      { clave: "MAT 14102", curso: "CALCULO DIFERENCIAL E INTEGRAL III", calificacion: "8 (ocho)", observaciones: "" },
      { clave: "EGN 17161", curso: "HISTORIA SOCIO-POLITICA DE MEXICO", calificacion: "8 (ocho)", observaciones: "" },
      { clave: "", curso: "AGOSTO - DICIEMBRE / 2023", calificacion: "", observaciones: "" },
      {
         clave: "COM 16203",
         curso: "DESARROLLO DE APLICACIONES INFORMÁTICAS",
         calificacion: "9 (nueve)",
         observaciones: "",
      },
      {
         clave: "EGN 17162",
         curso: "PROBLEMAS DE LA REALIDAD CONTEMPORANEA",
         calificacion: "9 (nueve)",
         observaciones: "",
      },
      { clave: "EST 11101", curso: "PROBABILIDAD", calificacion: "NA (No Acreditado)", observaciones: "" },
      { clave: "SDI 11120", curso: "ELEMENTOS DE FISICA", calificacion: "9 (nueve)", observaciones: "" },
      { clave: "", curso: "ENERO - MAYO / 2024", calificacion: "", observaciones: "" },
      { clave: "COM 12101", curso: "BASE DE DATOS", calificacion: "10 (diez)", observaciones: "" },
      { clave: "COM 23101", curso: "INTELIGENCIA ARTIFICIAL", calificacion: "8 (ocho)", observaciones: "" },
      { clave: "CON 10100", curso: "CONTABILIDAD 1", calificacion: "9 (nueve)", observaciones: "" },
      { clave: "MAT 14300", curso: "ALGEBRA SUPERIOR 1", calificacion: "10 (diez)", observaciones: "" },
      { clave: "SDI 11221", curso: "ELEMENTOS DE ELECTRONICA", calificacion: "8 (ocho)", observaciones: "" },
      { clave: "", curso: "VERANO / 2024", calificacion: "", observaciones: "" },
      { clave: "EST 11101", curso: "PROBABILIDAD", calificacion: "9 (nueve)", observaciones: "" },
      { clave: "", curso: "AGOSTO - DICIEMBRE / 2024", calificacion: "", observaciones: "" },
      { clave: "ECO 11102", curso: "ECONOMIA 2", calificacion: "7 (siete)", observaciones: "" },
      { clave: "EST 11102", curso: "INFERENCIA ESTADISTICA", calificacion: "8 (ocho)", observaciones: "" },
      { clave: "SDI 11322", curso: "CIRCUITOS LOGICOS", calificacion: "8 (ocho)", observaciones: "" },
      { clave: "SDI 13760", curso: "REDES DE COMPUTADORAS", calificacion: "9 (nueve)", observaciones: "" },
   ];

   // Función para determinar si el texto del curso contiene alguno de los términos a resaltar.
   const shouldBold = (texto: string) => {
      const regex = /verano|enero\s*-\s*mayo|agosto\s*-\s*diciembre/i;
      return regex.test(texto);
   };

   return (
      <div className="p-4">
         {/* Fecha en la esquina superior derecha */}
         <div className="text-right text-sm mb-2">
            {formattedDate} {formattedTime}
         </div>

         {/* Encabezado centrado */}
         <div className="text-center mb-4">
            <h1 className="font-bold">INSTITUTO TECNOLÓGICO AUTÓNOMO DE MÉXICO</h1>
            <p>Dirección Escolar</p>
            <p className="font-medium">Historia Académica</p>
         </div>

         {/* Datos del alumno y carrera */}
         <div className="flex justify-between text-sm mb-4">
            <div>
               <p>Clave única: 000202270</p>
               <p>Nombre: VALERIA ANAHI ANDRADE MAQUEDA</p>
            </div>
            <div className="text-right">
               <p>Carrera: INGENIERÍA EN COMPUTACIÓN</p>
               <p>Promedio: 8.34</p>
               <p>Total de materias curriculares acreditadas: 33</p>
            </div>
         </div>

         {/* Tabla principal sin líneas de borde */}
         <div className="overflow-x-auto">
            <table className="w-full">
               <thead>
                  <tr>
                     <th className="px-2 py-1 text-left w-1/5">Clave</th>
                     <th className="px-2 py-1 text-left w-3/5">Nombre del curso</th>
                     <th className="px-2 py-1 text-left w-1/5">Calificación</th>
                     <th className="px-2 py-1 text-left w-1/5">Observaciones</th>
                  </tr>
               </thead>
               <tbody>
                  {rows.map((item, i) => (
                     <tr key={i}>
                        <td className="px-2 py-1">{item.clave}</td>
                        <td className="px-2 py-1">
                           {shouldBold(item.curso) ? <span className="font-bold">{item.curso}</span> : item.curso}
                        </td>
                        <td className="px-2 py-1">{item.calificacion}</td>
                        <td className="px-2 py-1">{item.observaciones}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
