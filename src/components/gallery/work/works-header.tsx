"use client";

import React from "react";
import Link from "next/link";

export const WorksHeader: React.FC = () => {
  return (
    <header className="header">
      <Link href="/gallery" className="header__link ">
      
        Back
      </Link>
    </header>
  );
}; 