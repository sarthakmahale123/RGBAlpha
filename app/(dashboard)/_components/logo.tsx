import Image from "next/image";
import { Aperture } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex flex-row">
      < Aperture size={45} color="#a123aa"/>
      <div className="w-9">EduCare</div>
    </div>
    
  )
}