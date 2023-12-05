import { useState } from "react";
import SideBar from "./components/SideBar";
import logo from "../src/assets/no-projects.png";
import ProjectForm from "./components/ProjectForm";
import NoProject from "./components/NoProject";
import {nanoid} from 'nanoid';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });


  // changes the state from no project selected to "adding project"
  // 'undefined' is no project selected, 'null' is adding a new project and then anything else is project has been added.
  const handleAddingProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };


  const addNewProject = (projectData) => {
    setProjectState((prevState) => {
      
      const newProject = {
        ...projectData, 
        id: nanoid(),
      }

      return {
        ...prevState, 
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectState);


  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <ProjectForm onAdd={addNewProject}></ProjectForm>
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onAddingProject={handleAddingProject}></NoProject>;
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddingProject={handleAddingProject}></SideBar>

      {/* <div className="flex-grow pl-[50px]"></div> */}
      {content}
    </main>
  );
}

export default App;
