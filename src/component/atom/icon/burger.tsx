"use client";
import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Side from "../bar/side";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex -m-3">
        <Hamburger size={20} distance="lg" toggled={open} toggle={setOpen} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed item-center -mt-6 h-screen right-[130px] left-[-24px] top-[-24px] pt-12 pl-4 shadow-4xl bg-[#FCFCFC]"
          >
            <Side />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Burger;
