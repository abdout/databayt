'use client';
import Navbar from "@/component/docs/layout/navbar";
import Header from "@/component/project/layout/header";
import React, { ReactNode } from "react";



interface LayoutProps {
  children: React.ReactNode;
  
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      
      <main className="">
      <Navbar  />
      {children}
      </main>
    </div>
  );
};

export default Layout;