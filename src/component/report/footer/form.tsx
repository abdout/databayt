'use client' ;
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface IFooterFormProps {
  setTriggerUpdate: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

interface IForm {
  contractor: string;
  client: string;
  customer: string;
  consultant: string;
  contractorName: string;
  clientName: string;
  customerName: string;
  consultantName: string;
  contractorDesignation: string;
  clientDesignation: string;
  customerDesignation: string;
  consultantDesignation: string;
  contractorSignature: string;
  clientSignature: string;
  customerSignature: string;
  consultantSignature: string;
  contractorDate: string;
  clientDate: string;
  customerDate: string;
  consultantDate: string;
}

const FooterForm: React.FC<IFooterFormProps> = ({ setTriggerUpdate }) => {
  const [contractor, setContractor] = useState("");
  const [client, setClient] = useState("");
  const [customer, setCustomer] = useState("");
  const [consultant, setConsultant] = useState("");
  const [contractorName, setContractorName] = useState("");
  const [clientName, setClientName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [contractorDesignation, setContractorDesignation] = useState("");
  const [clientDesignation, setClientDesignation] = useState("");
  const [customerDesignation, setCustomerDesignation] = useState("");
  const [consultantDesignation, setConsultantDesignation] = useState("");
  const [contractorSignature, setContractorSignature] = useState("");
  const [clientSignature, setClientSignature] = useState("");
  const [customerSignature, setCustomerSignature] = useState("");
  const [consultantSignature, setConsultantSignature] = useState("");
  const [contractorDate, setContractorDate] = useState("");
  const [clientDate, setClientDate] = useState("");
  const [customerDate, setCustomerDate] = useState("");
  const [consultantDate, setConsultantDate] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/report/footer");
      const data = await res.json();
      if (data && data.footers && data.footers.length > 0) {
        const footer = data.footers[0];
        setContractor(footer.contractor);
        setClient(footer.client);
        setCustomer(footer.customer);
        setConsultant(footer.consultant);
        setContractorName(footer.contractorName);
        setClientName(footer.clientName);
        setCustomerName(footer.customerName);
        setConsultantName(footer.consultantName);
        setContractorDesignation(footer.contractorDesignation);
        setClientDesignation(footer.clientDesignation);
        setCustomerDesignation(footer.customerDesignation);
        setConsultantDesignation(footer.consultantDesignation);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form: IForm = {
      contractor,
      client,
      customer,
      consultant,
      contractorName,
      clientName,
      customerName,
      consultantName,
      contractorDesignation,
      clientDesignation,
      customerDesignation,
      consultantDesignation,
      contractorSignature,
      clientSignature,
      customerSignature,
      consultantSignature,
      contractorDate,
      clientDate,
      customerDate,
      consultantDate,
    };

    try {
      const res = await fetch("/api/report/footer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setTriggerUpdate((prev) => !prev);
        router.push("/report");
      } else {
        throw new Error("Failed to create/update a footer");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setContractor(e.target.value)}
        value={contractor}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Contractor"
      />
      <input
        onChange={(e) => setClient(e.target.value)}
        value={client}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Client"
      />
      <input
        onChange={(e) => setCustomer(e.target.value)}
        value={customer}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Customer"
      />
      <input
        onChange={(e) => setConsultant(e.target.value)}
        value={consultant}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Consultant"
      />
      <input
        onChange={(e) => setContractorName(e.target.value)}
        value={contractorName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Contractor Name"
      />
      <input
        onChange={(e) => setClientName(e.target.value)}
        value={clientName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Client Name"
      />
      <input
        onChange={(e) => setCustomerName(e.target.value)}
        value={customerName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Customer Name"
      />
      <input
        onChange={(e) => setConsultantName(e.target.value)}
        value={consultantName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Consultant Name"
      />
      <input
        onChange={(e) => setContractorDesignation(e.target.value)}
        value={contractorDesignation}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Contractor Designation"
      />
      <input
        onChange={(e) => setClientDesignation(e.target.value)}
        value={clientDesignation}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Client Designation"
      />
      <input
        onChange={(e) => setCustomerDesignation(e.target.value)}
        value={customerDesignation}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Customer Designation"
      />
      <input
        onChange={(e) => setConsultantDesignation(e.target.value)}
        value={consultantDesignation}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Consultant Designation"
      />
      <input
        onChange={(e) => setContractorSignature(e.target.value)}
        value={contractorSignature}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Contractor Signature"
      />
      <input
        onChange={(e) => setClientSignature(e.target.value)}
        value={clientSignature}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Client Signature"
      />
      <input
        onChange={(e) => setCustomerSignature(e.target.value)}
        value={customerSignature}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Customer Signature"
      />
      <input
        onChange={(e) => setConsultantSignature(e.target.value)}
        value={consultantSignature}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Consultant Signature"
      />
      <input
        onChange={(e) => setContractorDate(e.target.value)}
        value={contractorDate}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Contractor Date"
      />
      <input
        onChange={(e) => setClientDate(e.target.value)}
        value={clientDate}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Client Date"
      />
      <input
        onChange={(e) => setCustomerDate(e.target.value)}
        value={customerDate}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Customer Date"
      />
      <input
        onChange={(e) => setConsultantDate(e.target.value)}
        value={consultantDate}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Consultant Date"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Footer
      </button>
    </form>
  );
}

export default FooterForm;
