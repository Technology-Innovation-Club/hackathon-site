import React, { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogosProps {
  className?: string;
}

const Logos: FC<LogosProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-row items-center justify-center space-x-8", className)}>
      <a
        href="https://ticpau.vercel.app"
        rel="noopener noreferrer"
        target="_blank"
        className="relative z-50 m-0 -mt-1.5 p-0"
      >
        <Image
          src="/images/tic_logo.png"
          alt="Tech Innovation Club Logo"
          width={100}
          height={100}
        />
      </a>
      <a
        href="https://pau.edu.ng/"
        rel="noopener noreferrer"
        target="_blank"
        className="relative z-50 m-0 p-0"
      >
        <Image
          src="/images/pau_logo.png"
          alt="Pan-Atlantic University Logo"
          width={100}
          height={100}
        />
      </a>
    </div>
  );
};

export default Logos;
