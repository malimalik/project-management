import { nanoid } from "nanoid";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";
import logo from "../src/assets/no-projects.png";
import ProjectForm from "./components/ProjectForm";
import NoProject from "./components/NoProject";

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

  const handleDelete = (doomedProjectId) => {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== doomedProjectId
      );
      
      console.log("here are the new projects");
      console.log(updatedProjects);
      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: undefined,
      };

    });

  };

  const handleOpenSelectedProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const addNewProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: nanoid(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const selectedProject = projectState.projects.find((project) => {
    return project.id === projectState.selectedProjectId;
  });

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
    ></SelectedProject>
  )

  if (projectState.selectedProjectId === null) {
    content = (
      <ProjectForm onAdd={addNewProject} onCancel={handleCancel}></ProjectForm>
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onAddingProject={handleAddingProject}></NoProject>;
  }

  return (
    <main className="h-screen my-8 flex gap-8 overflow-hidden">
      <div className="w-1/4 overflow-auto">
        <SideBar
          onAddingProject={handleAddingProject}
          projects={projectState.projects}
          selectedProjectId={projectState.selectedProjectId}
          onSelectProject={handleOpenSelectedProject}
        />
      </div>

      <div className="flex-grow overflow-auto">{content}</div>
    </main>
  );
}

export default App;
