// General.tsx

import React from "react";
import Input from "../../../atom/input/input";

interface GeneralStepProps {
  customer: string;
  setCustomer: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  consultant: string;
  setConsultant: (value: string) => void;
  client: string;
  setClient: (value: string) => void;
}

const General: React.FC<GeneralStepProps> = ({
  customer,
  setCustomer,
  location,
  setLocation,
  consultant,
  setConsultant,
  client,
  setClient,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3>General</h3>
      <Input value={customer} onChange={setCustomer} placeholder="Customer" />
      <Input value={location} onChange={setLocation} placeholder="Location" />
      <Input value={consultant} onChange={setConsultant} placeholder="Consultant" />
      <Input value={client} onChange={setClient} placeholder="Client" />
    </div>
  );
};

export default General;