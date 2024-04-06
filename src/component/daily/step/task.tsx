import Input from "@/component/atom/input/input";
import Tag from "@/component/atom/tag/tag";
import { tasks } from "@/type/task/tag";
import React from "react";

const Task = (props: {
  title: string;
  setTitle: (value: string) => void;
}) => {
  return (
    <div className="space-y-8">
      <Input
        value={props.title}
        onChange={props.setTitle}
        placeholder="Task"
      />
      <Tag items={tasks} setTag={props.setTitle} />
    </div>
  );
};

export default Task;