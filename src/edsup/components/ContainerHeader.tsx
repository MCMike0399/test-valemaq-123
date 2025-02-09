import { Link } from "react-router";

export default function ContainerHeader() {
   return (
      <div className="flex gap-2 mx-4 mb-[-2px] font-[Arial]">
         <button
            className="bg-white border-2 border-b-0 border-[#e5e7eb] px-6 py-2 rounded-t-lg text-[#666666] hover:bg-gray-50 text-[15px]"
            style={{ fontFamily: "'Arial', Helvetica, sans-serif" }}
         >
            Personal Information
         </button>

         <button
            className="border-2 border-b-0 border-[#8cb3d0] px-6 py-2 rounded-t-lg font-medium text-[15px]"
            style={{
               background: "linear-gradient(180deg, #c2e3f8 0%, #b4dbf4 100%)",
               color: "#2d556e",
               fontFamily: "'Arial', Helvetica, sans-serif",
            }}
         >
            <Link to="/edsup">Student</Link>
         </button>
      </div>
   );
}
