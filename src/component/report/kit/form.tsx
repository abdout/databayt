import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface IkitFormProps {
  setTriggerUpdate: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

interface IForm {
  equipment: string;
  brand: string;
  model: string;
  serial: string;
  date: string;
  equipment1: string;
  brand1: string;
  model1: string;
  serial1: string;
  date1: string;
  equipment2: string;
  brand2: string;
  model2: string;
  serial2: string;
  date2: string;
  equipment3: string;
  brand3: string;
  model3: string;
  serial3: string;
  date3: string;

}

const KitForm: React.FC<IkitFormProps> = ({ setTriggerUpdate }) => {
  const [equipment, setEquipment] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [date, setDate] = useState("");
  const [equipment1, setEquipment1] = useState("");
  const [brand1, setBrand1] = useState("");
  const [model1, setModel1] = useState("");
  const [serial1, setSerial1] = useState("");
  const [date1, setDate1] = useState("");
  const [equipment2, setEquipment2] = useState("");
  const [brand2, setBrand2] = useState("");
  const [model2, setModel2] = useState("");
  const [serial2, setSerial2] = useState("");
  const [date2, setDate2] = useState("");
  const [equipment3, setEquipment3] = useState("");
  const [brand3, setBrand3] = useState("");
  const [model3, setModel3] = useState("");
  const [serial3, setSerial3] = useState("");
  const [date3, setDate3] = useState("");
 
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/report/kit");
      const data = await res.json();
      if (data && data.kits && data.kits.length > 0) {
        const kit = data.kits[0];
        setEquipment(kit.equipment);
        setBrand(kit.brand);
        setModel(kit.model);
        setSerial(kit.serial);
        setDate(kit.date);
        setEquipment1(kit.equipment1);
        setBrand1(kit.brand1);
        setModel1(kit.model1);
        setSerial1(kit.serial1);
        setDate1(kit.date1);
        setEquipment2(kit.equipment2);
        setBrand2(kit.brand2);
        setModel2(kit.model2);
        setSerial2(kit.serial2);
        setDate2(kit.date2);
        setEquipment3(kit.equipment3);
        setBrand3(kit.brand3);
        setModel3(kit.model3);
        setSerial3(kit.serial3);
        setDate3(kit.date3);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const kit = {
      equipment,
      brand,
      model,
      serial,
      date,
      equipment1,
      brand1,
      model1,
      serial1,
      date1,
      equipment2,
      brand2,
      model2,
      serial2,
      date2,
      equipment3,
      brand3,
      model3,
      serial3,
      date3,
    };
    await fetch("http://localhost:3000/api/report/kit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(kit),
    });
    setTriggerUpdate((prev) => !prev);
    router.push("/report/kit");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setEquipment(e.target.value)}
        value={equipment}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Equipment"
      />

      <input
        onChange={(e) => setBrand(e.target.value)}
        value={brand}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Brand"
      />  
      <input
        onChange={(e) => setModel(e.target.value)}
        value={model}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Model"
      />
      <input
        onChange={(e) => setSerial(e.target.value)}
        value={serial}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Serial"
      /> 
      <input
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Date" 
      />
      <input
        onChange={(e) => setEquipment1(e.target.value)}
        value={equipment1}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Equipment"
      />  
      <input
        onChange={(e) => setBrand1(e.target.value)}
        value={brand1}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Brand"
      />  
      <input
        onChange={(e) => setModel1(e.target.value)}
        value={model1}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Model"
      />
      <input
        onChange={(e) => setSerial1(e.target.value)}
        value={serial1}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Serial"
      />
      <input
        onChange={(e) => setDate1(e.target.value)}
        value={date1}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Date"  
      />  
      <input
        onChange={(e) => setEquipment2(e.target.value)}
        value={equipment2}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Equipment"
      />
      <input
        onChange={(e) => setBrand2(e.target.value)}
        value={brand2}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Brand"
      />
      <input
        onChange={(e) => setModel2(e.target.value)}
        value={model2}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Model"
      />
      <input
        onChange={(e) => setSerial2(e.target.value)}
        value={serial2}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Serial"
      />
      <input
        onChange={(e) => setDate2(e.target.value)}
        value={date2}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Date"
      />
      <input
        onChange={(e) => setEquipment3(e.target.value)}
        value={equipment3}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Equipment"
      />  
      <input
        onChange={(e) => setBrand3(e.target.value)}
        value={brand3}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Brand"
      />
      <input
        onChange={(e) => setModel3(e.target.value)}
        value={model3}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Model"
      />
      <input
        onChange={(e) => setSerial3(e.target.value)}
        value={serial3}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Serial"
      />
      <input
        onChange={(e) => setDate3(e.target.value)}
        value={date3}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Date"
      />
      <button
        type="submit"
        className="bg-slate-500 text-white px-8 py-2 rounded-md"
      >
        Update Kit
      </button>
    </form>
  );
}

export default KitForm;
      