import React from "react";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  link: string;
}

interface PartnersCardProps {
  partner: Partner;
}

const PartnersCard: React.FC<PartnersCardProps> = ({ partner }) => {
  return (
    <a
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 block"
    >
      <div
        className="flex flex-col items-center text-center p-6 rounded-2xl 
        bg-white border border-gray-200 shadow-md 
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-[0_8px_25px_rgba(255,165,0,0.4)] 
        hover:border-orange-400"
      >
        <div
          className="w-[150px] h-[150px] rounded-full flex items-center justify-center 
          overflow-hidden border-2 border-transparent transition-all duration-500 
          hover:border-orange-400 hover:shadow-[0_4px_15px_rgba(255,200,0,0.5)]"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={150}
            height={150}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="mt-4 text-lg font-semibold text-orange-600 hover:text-black transition-colors">
          {partner.name}
        </p>
      </div>
    </a>
  );
};

export default PartnersCard;
