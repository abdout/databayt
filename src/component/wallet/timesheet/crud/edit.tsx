// "use client";
// import { FC, FormEvent, useState, useEffect } from "react";
// import { useProject } from "@/provider/project";
// import Volt from "@/component/project/home/step/volt";
// import { SelectOption } from "@/component/atom/select/select";
// import { Icon } from "@iconify/react";

// import Item from "../../../atom/select/item";

// import {
//   lv,
//   mv,
//   hv,
//   ev,
//   LvSwgr,
//   MvSwgr,
//   HvSwgr,
//   EvSwgr,
//   LvTrafo,
//   MvTrafo,
//   HvTrafo,
//   EvTrafo,
//   LvCable,
//   MvCable,
//   HvCable,
//   EvCable,
//   LvRmu,
//   MvRmu,
//   HvRmu,
//   EvRmu,
// } 
// from "@/constant/project/item";

// const totalSteps = 4;

// const Edit = ({id}: {id: string}) => {
  
//   useEffect(() => {
//     const fetchProjectData = async () => {
//       const res = await fetch(`http://localhost:3000/api/project/${id}`);
//       const project = await res.json();

//       setTitle(project.title);
//       setDescription(project.description);
//       setVoltages(project.voltages);
//       setLvOptions(project.lvOptions);
//       setMvOptions(project.mvOptions);
//       setHvOptions(project.hvOptions);
//       setEvOptions(project.evOptions);
//       setLvSwgr(project.lvOptions.lvSwgr);
//       setLvTrafo(project.lvOptions.lvTrafo);
//       setLvRmu(project.lvOptions.lvRmu);
//       setLvCable(project.lvOptions.lvCable);
//       setMvSwgr(project.mvOptions.mvSwgr);
//       setMvTrafo(project.mvOptions.mvTrafo);
//       setMvRmu(project.mvOptions.mvRmu);
//       setMvCable(project.mvOptions.mvCable);
//       setHvSwgr(project.hvOptions.hvSwgr);
//       setHvTrafo(project.hvOptions.hvTrafo);
//       setHvRmu(project.hvOptions.hvRmu);
//       setHvCable(project.hvOptions.hvCable);
//       setEvSwgr(project.evOptions.evSwgr);
//       setEvTrafo(project.evOptions.evTrafo);
//       setEvRmu(project.evOptions.evRmu);
//       setEvCable(project.evOptions.evCable);
//     };

//     fetchProjectData();
//   }, [id]);

//   const { closeModal, fetchProject } = useProject();
//   const [title, setTitle] = useState<string>("");
//   const [description, setDescription] = useState<string>("");
//   const [voltages, setVoltages] = useState<{ [key: string]: boolean }>({
//     LV: false,
//     MV: true,
//     HV: false,
//     EV: false,
//   });
//   const [lvOptions, setLvOptions] = useState<SelectOption[]>([]);
//   const [mvOptions, setMvOptions] = useState<SelectOption[]>([]);
//   const [hvOptions, setHvOptions] = useState<SelectOption[]>([]);
//   const [evOptions, setEvOptions] = useState<SelectOption[]>([]);
//   const [lvSwgr, setLvSwgr] = useState<SelectOption[]>([]);
//   const [lvTrafo, setLvTrafo] = useState<SelectOption[]>([]);
//   const [lvRmu, setLvRmu] = useState<SelectOption[]>([]);
//   const [lvCable, setLvCable] = useState<SelectOption[]>([]);
//   const [mvSwgr, setMvSwgr] = useState<SelectOption[]>([]);
//   const [mvTrafo, setMvTrafo] = useState<SelectOption[]>([]);
//   const [mvRmu, setMvRmu] = useState<SelectOption[]>([]);
//   const [mvCable, setMvCable] = useState<SelectOption[]>([]);

//   const [hvSwgr, setHvSwgr] = useState<SelectOption[]>([]);
//   const [hvTrafo, setHvTrafo] = useState<SelectOption[]>([]);
//   const [hvRmu, setHvRmu] = useState<SelectOption[]>([]);
//   const [hvCable, setHvCable] = useState<SelectOption[]>([]);

//   const [evSwgr, setEvSwgr] = useState<SelectOption[]>([]);
//   const [evTrafo, setEvTrafo] = useState<SelectOption[]>([]);
//   const [evRmu, setEvRmu] = useState<SelectOption[]>([]);
//   const [evCable, setEvCable] = useState<SelectOption[]>([]);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [update] = useState(false);
//   // const progress = (currentStep / totalSteps) * 100;

//   const nextStep = () => {
//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1);
//     }
//   };
//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     console.log(voltages);
  
//     try {
//       console.log({ title, description, voltages });
  
//       const url = `http://localhost:3000/api/project/${id}`; 
//       const method = "PUT";


//       const res = await fetch(url, {
//         method,
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           description,
//           voltages,
//           lvOptions: {
//             lvSwgr,
//             lvTrafo,
//             lvCable,
//             lvRmu
//           },
//           mvOptions: {
//             mvSwgr,
//             mvTrafo,
//             mvCable,
//             mvRmu
//           },
//           hvOptions: {
//             hvSwgr,
//             hvTrafo,
//             hvCable,
//             hvRmu
//           },
//           evOptions: {
//             evSwgr,
//             evTrafo,
//             evCable,
//             evRmu
//           },
//         }),
//       });
  
//       console.log("Fetch response:", res);
  
//       if (res.ok) {
//         closeModal();
//         await fetchProject();
//       } else {
//         throw new Error("Failed to update the project");
//       }
//     } catch (error: any) {
//       console.log("Error:", error);
//     }
//   };
  
//   const [steps, setSteps] = useState<string[]>([]);
//   useEffect(() => {
//   if (voltages) {
//     const newSteps = [];
//     if (voltages.LV) newSteps.push("LV");
//     if (voltages.MV) newSteps.push("MV");
//     if (voltages.HV) newSteps.push("HV");
//     if (voltages.EV) newSteps.push("EV");
//     setSteps(newSteps);
//   }
// }, [voltages]);

//   const totalSteps = 2 + steps.length; // Update total steps

//   return (
//     <div className="flex flex-col items-center justify-between h-full px-4 pb-4">
//       <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 h-full">
//         <div className="flex justify-center items-center h-full">
//           <div>
//             <button
//               type="button"
//               onClick={prevStep}
//               style={{ opacity: currentStep === 1 ? 0.3 : 1 }}
//             >
//               <Icon icon="ep:arrow-left" width="2em" height="2em" />
//             </button>
//           </div>

//           {currentStep === 1 && (
//   <div>
//     <h1 className="flex justify-center items-center text-2xl">
//       General
//     </h1>
//     <input
//       onChange={(e) => setTitle(e.target.value)}
//       value={title}
//       className="border border-slate-500 px-8 py-2"
//       type="text"
//       placeholder="Topic Title"
//     />

//     <input
//       onChange={(e) => setDescription(e.target.value)}
//       value={description}
//       className="border border-slate-500 px-8 py-2"
//       type="text"
//       placeholder="Topic Description"
//     />
//   </div>
// )}

// {currentStep === 2 && (
//   <div className="space-y-4">
//     <h1 className="flex justify-center items-center text-2xl">
//       Item
//     </h1>
//     <Volt onVoltChange={setVoltages} />
//     {voltages.LV && (
//       <Item label="LV" options={lv} onOptionChange={setLvOptions}  />
//     )}
//     {voltages.MV && (
//       <Item label="MV" options={mv} onOptionChange={setMvOptions}  />
//     )}
//     {voltages.HV && (
//       <Item label="HV" options={hv} onOptionChange={setHvOptions}  />
//     )}
//     {voltages.EV && (
//       <Item label="EV" options={ev} onOptionChange={setEvOptions}  />
//     )}
//   </div>
// )}

// {steps[currentStep - 3] === "LV" && (
//   <div>
//     <h1 className="flex justify-center items-center text-2xl">
//       Low Voltage
//     </h1>
//     {lvOptions.some((option) => option.label === "Swgr") && (
//       <Item
//         label="LV Swgr"
//         options={LvSwgr}
//         onOptionChange={setLvSwgr}
       
//       />
//     )}
//     {lvOptions.some((option) => option.label === "Trafo") && (
//       <Item
//         label="LV Trafo"
//         options={LvTrafo}
//         onOptionChange={setLvTrafo}
        
//       />
//     )}
//     {lvOptions.some((option) => option.label === "Cable") && (
//       <Item
//         label="LV Cable"
//         options={LvCable}
//         onOptionChange={setLvCable}
        
//       />
//     )}
//     {lvOptions.some((option) => option.label === "RMU") && (
//       <Item
//         label="LV RMU"
//         options={LvRmu}
//         onOptionChange={setLvRmu}
       
//       />
//     )}
//   </div>
// )}

//           {steps[currentStep - 3] === "MV" && (
//             <div>
//               <h1 className="flex justify-center items-center text-2xl">
//                 Medium Voltage
//               </h1>
//               {mvOptions.some((option) => option.label === "Swgr") && (
//                 <Item
//                   label="MV Swgr"
//                   options={MvSwgr}
//                   onOptionChange={setMvSwgr}
                  
//                 />
//               )}
//               {mvOptions.some((option) => option.label === "Trafo") && (
//                 <Item
//                   label="MV Trafo"
//                   options={MvTrafo}
//                   onOptionChange={setMvTrafo}
                 
//                 />
//               )}
//               {mvOptions.some((option) => option.label === "Cable") && (
//                 <Item
//                   label="MV Cable"
//                   options={MvCable}
//                   onOptionChange={setMvCable}
                 
//                 />
//               )}
//               {mvOptions.some((option) => option.label === "RMU") && (
//                 <Item
//                   label="MV RMU"
//                   options={MvRmu}
//                   onOptionChange={setMvRmu}
                  
//                 />
//               )}
//             </div>
//           )}

//           {steps[currentStep - 3] === "HV" && (
//             <div>
//               <h1 className="flex justify-center items-center text-2xl">
//                 High Voltage
//               </h1>
//               {hvOptions.some((option) => option.label === "Swgr") && (
//                 <Item
//                   label="HV Swgr"
//                   options={HvSwgr}
//                   onOptionChange={setHvSwgr}
                  
//                 />
//               )}
//               {hvOptions.some((option) => option.label === "Trafo") && (
//                 <Item
//                   label="HV Trafo"
//                   options={HvTrafo}
//                   onOptionChange={setHvTrafo}
                  
//                 />
//               )}
//               {hvOptions.some((option) => option.label === "Cable") && (
//                 <Item
//                   label="HV Cable"
//                   options={HvCable}
//                   onOptionChange={setHvCable}
                  
//                 />
//               )}
//               {hvOptions.some((option) => option.label === "RMU") && (
//                 <Item
//                   label="HV RMU"
//                   options={HvRmu}
//                   onOptionChange={setHvRmu}
                 
//                 />
//               )}
//             </div>
//           )}

//           {steps[currentStep - 3] === "EV" && (
//             <div>
//               <h1 className="flex justify-center items-center text-2xl">
//                 Extra High Voltage
//               </h1>
//               {evOptions.some((option) => option.label === "Swgr") && (
//                 <Item
//                   label="EV Swgr"
//                   options={EvSwgr}
//                   onOptionChange={setEvSwgr}
                  
//                 />
//               )}
//               {evOptions.some((option) => option.label === "Trafo") && (
//                 <Item
//                   label="EV Trafo"
//                   options={EvTrafo}
//                   onOptionChange={setEvTrafo}
                  
//                 />
//               )}
//               {evOptions.some((option) => option.label === "Cable") && (
//                 <Item
//                   label="EV Cable"
//                   options={EvCable}
//                   onOptionChange={setEvCable}
                  
//                 />
//               )}
//               {evOptions.some((option) => option.label === "RMU") && (
//                 <Item
//                   label="EV RMU"
//                   options={EvRmu}
//                   onOptionChange={setEvRmu}
                  
//                 />
//               )}
//             </div>
//           )}
//           <div>
//             <button
//               type="button"
//               onClick={nextStep}
//               style={{ opacity: currentStep === totalSteps ? 0.3 : 1 }}
//             >
//               <Icon icon="ep:arrow-right" width="2em" height="2em" />
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-between items-center h-full">
//           {/* ... */}
//         </div>
//         <div className="flex flex-col items-center space-y-4">
//           <div className="flex justify-center space-x-2">
//             {Array.from({ length: totalSteps }).map((_, step) => (
//               <div
//                 key={step}
//                 className={`h-2 w-2 rounded-full ${
//                   step + 1 === currentStep ? "bg-yellow-500" : "bg-gray-500"
//                 }`}
//               />
//             ))}
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="px-6 py-3 bg-yellow-400 w-full font-bold rounded mt-4"
//             >
//               Update project
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Edit;
