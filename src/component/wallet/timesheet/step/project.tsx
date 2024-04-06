import Input from "@/component/atom/input/input";
import Tag from "@/component/atom/tag/tag";
import { projects } from "@/type/task/tag";
import React from "react";

const Project = (props: {
  project: string;
  setProject: (value: string) => void;
}) => {
  return (
    <div className="space-y-8">
      <Input
        value={props.project}
        onChange={props.setProject}
        placeholder="Project"
      />
      <Tag items={projects} setTag={props.setProject} />
    </div>
  );
};

export default Project;
