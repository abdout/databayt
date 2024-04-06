import { FC, FormEvent, useState } from "react";
import { useModal } from "@/provider/modal";
import Task from "../step/task";
import Team from "../step/team";
import Location from "../step/location";
import Status from "../step/status";
import Priority from "../step/priority";
import EstTime from "../step/esttime";
import Project from "../step/project";
import PrevNextButtons from "@/component/project/home/step/next";
import Indicator from "@/component/project/home/step/indicator";
import Submit from "@/component/atom/button/submit";
import { useTask } from "@/provider/task";
import Day from "../step/day";
import { domain } from "@/constant/domain";


const Create: FC = () => {
  const { fetchTasks } = useTask();
  const { closeModal } = useModal();
  const [title, setTitle] = useState("aa");
  const [team, setTeam] = useState<string[]>(['/team/eng/user.svg']);
  const [location, setLocation] = useState("Undefined");
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState("In Progress");
  const [priority, setPriority] = useState("Medium");
  const [estTime, setEstTime] = useState("4");
  const [project, setProject] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep < 8 ? prevStep + 1 : 8);
  };
  
  const prevStep = () => {
    setCurrentStep(prevStep => prevStep > 1 ? prevStep - 1 : 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`${domain}/api/task`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          team,
          location,
          date,
          status,
          priority,
          estTime,
          project
        }),
      });
  
      if (res.ok) {
        closeModal();
        await fetchTasks();
      } else {
        throw new Error("Failed to create a task");
      }
    } catch (error: any) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-between h-full px-4 pb-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 h-full">
        <div className="flex justify-center items-center h-full">
          <PrevNextButtons
            currentStep={currentStep}
            totalSteps={8}
            prevStep={prevStep}
            nextStep={nextStep}
          />

{currentStep === 1 && <Project project={project} setProject={setProject} />}
{currentStep === 2 && <Task title={title} setTitle={setTitle} />}
{currentStep === 3 && <Day date={date} setDate={setDate} />}
{currentStep === 4 && <Location location={location} setLocation={setLocation} />}
{currentStep === 5 && <Team team={team} setTeam={setTeam} />}
{currentStep === 6 && <Status status={status} setStatus={setStatus} />}
{currentStep === 7 && <Priority priority={priority} setPriority={setPriority} />}
{currentStep === 8 && <EstTime estTime={estTime} setEstTime={setEstTime} />}
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Indicator totalSteps={8} currentStep={currentStep} />
          <Submit label="Create Task"/>
        </div>
      </form>
    </div>
  );
};

export default Create;