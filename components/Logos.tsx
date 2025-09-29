import React, { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogosProps {
  className?: string;
}

const Logos: FC<LogosProps> = ({ className }) => {
  return (
    <div className={cn("flex h-[50px] flex-row space-x-8", className)}>
      <a
        href="https://ticpau.vercel.app"
        rel="noopener noreferrer"
        target="_blank"
        className="relative z-50 m-0 -mt-1.5 h-[50px] w-[100px] p-0"
      >
        <Image
          src="/images/tic_logo.png"
          alt="Tech Innovation Club Logo"
          fill={true}
        />
      </a>
      <a
        href="https://pau.edu.ng/"
        rel="noopener noreferrer"
        target="_blank"
        className="relative z-50 m-0 h-[35px] w-[100px] p-0"
      >
        <Image
          src="/images/pau_logo.png"
          alt="Pan-Atlantic University Logo"
          fill={true}
        />
      </a>
    </div>
  );
};

export default Logos;
