import { SelectOption } from "@/component/atom/select/select";
import { Dispatch, SetStateAction } from "react";

export interface CreateState {
    customer: string;
    location: string;
    consultant: string;
    client: string;
    voltages: { [key: string]: boolean };
    lvOptions: SelectOption[];
    mvOptions: SelectOption[];
    hvOptions: SelectOption[];
    evOptions: SelectOption[];
    lvSwgr: SelectOption[];
    lvTrafo: SelectOption[];
    lvRmu: SelectOption[];
    lvCable: SelectOption[];
    mvSwgr: SelectOption[];
    mvTrafo: SelectOption[];
    mvRmu: SelectOption[];
    mvCable: SelectOption[];
    hvSwgr: SelectOption[];
    hvTrafo: SelectOption[];
    hvRmu: SelectOption[];
    hvCable: SelectOption[];
    evSwgr: SelectOption[];
    evTrafo: SelectOption[];
    evRmu: SelectOption[];
    evCable: SelectOption[];
}

export interface CreateContextProps extends CreateState {
    setCustomer: Dispatch<SetStateAction<string>>;
    setLocation: Dispatch<SetStateAction<string>>;
    setConsultant: Dispatch<SetStateAction<string>>;
    setClient: Dispatch<SetStateAction<string>>;
    setVoltages: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
    setLvOptions: Dispatch<SetStateAction<SelectOption[]>>;
    setMvOptions: Dispatch<SetStateAction<SelectOption[]>>;
    setHvOptions: Dispatch<SetStateAction<SelectOption[]>>;
    setEvOptions: Dispatch<SetStateAction<SelectOption[]>>;
    setLvSwgr: Dispatch<SetStateAction<SelectOption[]>>;
    setLvTrafo: Dispatch<SetStateAction<SelectOption[]>>;
    setLvRmu: Dispatch<SetStateAction<SelectOption[]>>;
    setLvCable: Dispatch<SetStateAction<SelectOption[]>>;
    setMvSwgr: Dispatch<SetStateAction<SelectOption[]>>;
    setMvTrafo: Dispatch<SetStateAction<SelectOption[]>>;
    setMvRmu: Dispatch<SetStateAction<SelectOption[]>>;
    setMvCable: Dispatch<SetStateAction<SelectOption[]>>;
    setHvSwgr: Dispatch<SetStateAction<SelectOption[]>>;
    setHvTrafo: Dispatch<SetStateAction<SelectOption[]>>;
    setHvRmu: Dispatch<SetStateAction<SelectOption[]>>;
    setHvCable: Dispatch<SetStateAction<SelectOption[]>>;
    setEvSwgr: Dispatch<SetStateAction<SelectOption[]>>;
    setEvTrafo: Dispatch<SetStateAction<SelectOption[]>>;
    setEvRmu: Dispatch<SetStateAction<SelectOption[]>>;
    setEvCable: Dispatch<SetStateAction<SelectOption[]>>;
}