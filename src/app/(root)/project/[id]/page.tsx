"use client";
import Action from "@/component/project/layout/action";
import { useEffect, useState } from "react";
import Info from "@/component/project/detial/info";
import { api } from "@/constant/api";



interface Project {
  _id: string;
  title: string;
  description: string;
}

interface Params {
  id: string;
}

const Detail = ({ params }: { params: Params }) => {
  const { id } = params;
  console.log("ID:", id); // Debugging statement

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`${api}/project/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data:", data); // Debugging statement
          if (data) {
            setProject(data.project);
          } else {
            console.error("Empty response from server");
          }
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-4 ">
      <Action projectTitle={project.title} />
      <Info />
     
      
    </div>
  );
};

export default Detail;
