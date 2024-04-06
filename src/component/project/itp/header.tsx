import React from "react";
import Cell from "./cell";
import Split from "./split";

const Header = () => {
  return (
    <div className="flex w-[1239px]">
      <Cell data="No." head={true} bg={1} width="44" />
      <Cell data={["Sub", "no."]} head={true} bg={1} width="44" />
      <Cell data={["Activity/", "Inspection"]} head={true} bg={1} width="190" />
      <Cell data={["Inspect./", "Test"]} head={true} bg={1} width="100" />
      <Cell data={["Acceptance/", "criteria"]} head={true} bg={1} width="115"/>
      <Cell data="Frequency" head={true} bg={1} width="115" />
      <Cell data={["Sepcification/", "Drawings"]} head={true} bg={1} width="180" />
      <Cell data={["Technical", "documents"]} head={true} bg={1} width="110"/>
      <Cell data="Record" head={true} bg={1} width="90" />
      <Split head={true} />
      <Cell data="Remark" head={true} bg={1} end={true} width="72" />
    </div>
  );
};

export default Header;

