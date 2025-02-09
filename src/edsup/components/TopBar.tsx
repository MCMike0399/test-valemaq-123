import ItamIcon from "@/assets/topbar/sgu-logo.png";

export default function TopBar() {
   return (
      <div className="w-full">
         {/* Barra principal con gradiente VERTICAL */}
         <div
            className="w-full h-16 bg-gradient-to-b from-[#00594b] via-[#87b0aa] to-[#d4e3e1] 
                 flex items-center justify-between px-4 relative"
            style={{ background: "linear-gradient(180deg, #00594b 0%, ##87b0aa 40%, #d4e3e1 100%)" }}
         >
            {/* Logo ITAM - tamaño ajustado */}
            <img
               src={ItamIcon}
               alt="ITAM Logo"
               className="h-10 object-contain max-w-[120px]" // Tamaño reducido
            />

            {/* Enlaces de la derecha */}
            <div className="flex items-center gap-3">
               <a
                  
                  className="text-white text-sm font-medium hover:text-opacity-80 transition-all pr-3 border-r border-white/50"
               >
                  Sign Out
               </a>
               <a className="text-white text-sm font-medium hover:text-opacity-80 transition-all">
                  Help
               </a>
            </div>
         </div>

         {/* Barra roja inferior - más delgada */}
         <div className="w-full h-[8px] bg-[#8c1011]" />
      </div>
   );
}
