"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ClientOnly from "@/components/layout/ClientOnly";
import FooterColumn from "@/components/layout/FooterColumn";

type Props = {};

function Footer({}: Props) {
  const [country, setCountry] = useState("United States");

  const itemData = [
    ["ABOUT", "Paradigm", "Contributors", "Careers", "Investors"],
    ["SUPPORT", "Help Center", "FAQs", "Documentiation", "code of conduct"],
    ["SOLUTION", "Workflow", "Integration", "AI Agent", "Features"],
    ["RESOURCE","Codebase","Case Studies","Books", "Videos"],
  ];

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_LOOKUP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  const footerColumns = itemData.map((item, index) => (
    <FooterColumn key={index} index={index} data={item} />
  ))

  return (
    <ClientOnly>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-32 px-32 py-14 w-screen  bg-gray-100 text-gray-600">
        {footerColumns}
        <p className="text-sm">{country}</p>
      </div>
    </ClientOnly>
  );
}

export default Footer;
