"use client";
import { FC, FormEvent, useState, useEffect } from "react";
import { useProject } from "@/provider/project";
import { lv, mv, hv, ev, LvSwgr, HvSwgr, EvSwgr, LvTrafo, HvTrafo, EvTrafo, LvCable, HvCable, EvCable, LvRmu, HvRmu, EvRmu } from "@/constant/project/item";
import { useModal } from "@/provider/modal";
import { useCreate } from "@/provider/create";
import { usePostProject } from "@/provider/post";
import General from "../step/general";
import ItemStep from "../step/item";
import MvStep from "../step/mv";
import LvStep from "../step/lv";
import HvStep from "../step/hv";
import EvStep from "../step/ev";
import { useStep } from "@/lib/step";
import Submit from "../../../atom/button/submit";
import Indicator from "../step/indicator";
import PrevNextButtons from "../step/next";

const Create: FC = () => {
  const { fetchProjects } = useProject();
  const { closeModal } = useModal();
  const { postProject, postProjectState } = usePostProject();
  const { customer, setCustomer, location, setLocation, consultant, setConsultant, client, setClient, voltages, setVoltages, lvOptions, setLvOptions, mvOptions, setMvOptions, hvOptions, setHvOptions, evOptions, setEvOptions, lvSwgr, setLvSwgr, lvTrafo, setLvTrafo, lvRmu, setLvRmu, lvCable, setLvCable, mvSwgr, setMvSwgr, mvTrafo, setMvTrafo, mvRmu, setMvRmu, mvCable, setMvCable, hvSwgr, setHvSwgr, hvTrafo, setHvTrafo, hvRmu, setHvRmu, hvCable, setHvCable, evSwgr, setEvSwgr, evTrafo, setEvTrafo, evRmu, setEvRmu, evCable, setEvCable } = useCreate();
  const [currentStep, setCurrentStep] = useState(1);
  const { step, nextStep, prevStep } = useStep(voltages, currentStep, setCurrentStep);

  useEffect(() => {
    if (postProjectState.status === 'succeeded') {
      closeModal();
      fetchProjects();
    }
  }, [postProjectState.status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const projectData = {
      customer,
      location,
      consultant,
      client,
      voltages,
      lvOptions: { lvSwgr, lvTrafo, lvCable, lvRmu },
      mvOptions: { mvSwgr, mvTrafo, mvCable, mvRmu },
      hvOptions: { hvSwgr, hvTrafo, hvCable, hvRmu },
      evOptions: { evSwgr, evTrafo, evCable, evRmu }
    };

    await postProject(projectData);
  };

  const totalSteps = 2 + step.length; // Update total steps

  return (
    <div className="relative flex flex-col items-center justify-between h-full px-4 pb-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 h-full">
        <div className="flex justify-center items-center h-full">

          <PrevNextButtons
            currentStep={currentStep} // Pass the current step
            totalSteps={step.length} // Pass the total number of steps
            prevStep={prevStep} // Pass the function to go to the previous step
            nextStep={nextStep} // Pass the function to go to the next step
          />



          {currentStep === 1 && (
            <div>
              <General
                customer={customer}
                setCustomer={setCustomer}
                location={location}
                setLocation={setLocation}
                consultant={consultant}
                setConsultant={setConsultant}
                client={client}
                setClient={setClient}
              />
            </div>
          )}

          {currentStep === 2 && (
            <ItemStep
              voltages={voltages}
              setVoltages={setVoltages}
              lv={lv}
              setLvOptions={setLvOptions}
              mv={mv}
              setMvOptions={setMvOptions}
              hv={hv}
              setHvOptions={setHvOptions}
              ev={ev}
              setEvOptions={setEvOptions}
            />
          )}

          {step[currentStep - 3] === "LV" && (
            <LvStep
              lvOptions={lvOptions}
              LvSwgr={LvSwgr}
              setLvSwgr={setLvSwgr}
              LvTrafo={LvTrafo}
              setLvTrafo={setLvTrafo}
              LvCable={LvCable}
              setLvCable={setLvCable}
              LvRmu={LvRmu}
              setLvRmu={setLvRmu}
            />
          )}

          {step[currentStep - 3] === "MV" && (
            <MvStep
              mvOptions={mvOptions}
              setMvSwgr={setMvSwgr}
              setMvTrafo={setMvTrafo}
              setMvCable={setMvCable}
              setMvRmu={setMvRmu}
            />
          )}

          {step[currentStep - 3] === "HV" && (
            <HvStep
              hvOptions={hvOptions}
              HvSwgr={HvSwgr}
              setHvSwgr={setHvSwgr}
              HvTrafo={HvTrafo}
              setHvTrafo={setHvTrafo}
              HvCable={HvCable}
              setHvCable={setHvCable}
              HvRmu={HvRmu}
              setHvRmu={setHvRmu}
            />
          )}

          {step[currentStep - 3] === "EV" && (
            <EvStep
              evOptions={evOptions}
              EvSwgr={EvSwgr}
              setEvSwgr={setEvSwgr}
              EvTrafo={EvTrafo}
              setEvTrafo={setEvTrafo}
              EvCable={EvCable}
              setEvCable={setEvCable}
              EvRmu={EvRmu}
              setEvRmu={setEvRmu}
            />
          )}

        </div>
        <div className="flex justify-between items-center h-full">
          {/* ... */}
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Indicator totalSteps={totalSteps} currentStep={currentStep} />
          <Submit label="Create Project" />
        </div>
      </form>
    </div>
  );
};

export default Create;
