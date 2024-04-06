'use client';
import { SelectOption } from "@/component/atom/select/select";
import { CreateContextProps, CreateState } from "@/type/project/create";
import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

const CreateContext = createContext<CreateContextProps | undefined>(undefined);

export const useCreate = () => {
  const context = useContext(CreateContext);
  if (!context) {
    throw new Error('useCreate must be used within a CreateProvider');
  }
  return context;
};

export const CreateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customer, setCustomer] = useState("");
  const [location, setLocation] = useState("");
  const [consultant, setConsultant] = useState("");
  const [client, setClient] = useState("");
  const [voltages, setVoltages] = useState<{ [key: string]: boolean }>({ LV: false, MV: true, HV: false, EV: false });
  const [lvOptions, setLvOptions] = useState<SelectOption[]>([]);
  const [mvOptions, setMvOptions] = useState<SelectOption[]>([]);
const [hvOptions, setHvOptions] = useState<SelectOption[]>([]);
const [evOptions, setEvOptions] = useState<SelectOption[]>([]);
const [lvSwgr, setLvSwgr] = useState<SelectOption[]>([]);
const [lvTrafo, setLvTrafo] = useState<SelectOption[]>([]);
const [lvRmu, setLvRmu] = useState<SelectOption[]>([]);
const [lvCable, setLvCable] = useState<SelectOption[]>([]);
const [mvSwgr, setMvSwgr] = useState<SelectOption[]>([]);
const [mvTrafo, setMvTrafo] = useState<SelectOption[]>([]);
const [mvRmu, setMvRmu] = useState<SelectOption[]>([]);
const [mvCable, setMvCable] = useState<SelectOption[]>([]);
const [hvSwgr, setHvSwgr] = useState<SelectOption[]>([]);
const [hvTrafo, setHvTrafo] = useState<SelectOption[]>([]);
const [hvRmu, setHvRmu] = useState<SelectOption[]>([]);
const [hvCable, setHvCable] = useState<SelectOption[]>([]);
const [evSwgr, setEvSwgr] = useState<SelectOption[]>([]);
const [evTrafo, setEvTrafo] = useState<SelectOption[]>([]);
const [evRmu, setEvRmu] = useState<SelectOption[]>([]);
const [evCable, setEvCable] = useState<SelectOption[]>([]);

  const stateAndSetters: CreateContextProps = {
    customer,
    setCustomer,
    location,
    setLocation,
    consultant,
    setConsultant,
    client,
    setClient,
    voltages,
    setVoltages: setVoltages as Dispatch<SetStateAction<{ [key: string]: boolean }>>,
    lvOptions,
    setLvOptions,
    mvOptions,
    setMvOptions,
    hvOptions,
    setHvOptions,
    evOptions,
    setEvOptions,
    lvSwgr,
    setLvSwgr,
    lvTrafo,
    setLvTrafo,
    lvRmu,
    setLvRmu,
    lvCable,
    setLvCable,
    mvSwgr,
    setMvSwgr,
    mvTrafo,
    setMvTrafo,
    mvRmu,
    setMvRmu,
    mvCable,
    setMvCable,
    hvSwgr,
    setHvSwgr,
    hvTrafo,
    setHvTrafo,
    hvRmu,
    setHvRmu,
    hvCable,
    setHvCable,
    evSwgr,
    setEvSwgr,
    evTrafo,
    setEvTrafo,
    evRmu,
    setEvRmu,
    evCable,
    setEvCable,
  };

  return (
    <CreateContext.Provider value={stateAndSetters}>
      {children}
    </CreateContext.Provider>
  );
};