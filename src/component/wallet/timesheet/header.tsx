'use client';
import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="flex items-center gap-4">
        <Icon icon='ph:timer-thin' width={120}/>
        <div className="flex flex-col space-y-1 mt-[-20px]">
            <h2>Eco Limited Arabia Contracting Co.</h2>
            <h4>Time Sheet for the month of <strong>Feb 2024</strong></h4>
            <h4>Project Manager: <strong>Mahmoud Hamdi</strong></h4>
            <h4>Engineer: <strong>Osman Ali</strong>, Iqama no.: <strong>2515334866</strong> </h4>
        </div>
    </div>
    
  );
};

export default Header;
