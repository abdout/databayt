'use client';
import Header from "@/component/project/layout/header";
import React, { ReactNode } from "react";



interface LayoutProps {
  children: React.ReactNode;
  params: any; // Add this line
  
}

const Layout: React.FC<LayoutProps> = ({ children, params}) => {
  return (
    <div>
      <Header params={params} />
      <main className="mt-10">
      {children}
      </main>
    </div>
  );
};

export default Layout;
