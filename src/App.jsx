import { useState } from "react";
import SideBar from "./components/SideBar";
import logo from "../src/assets/no-projects.png";
import ProjectForm from "./components/ProjectForm";
import NoProject from "./components/NoProject";
function App() {
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectState, setProjectState] = useState({
    activeProject: undefined,
    projects: [],
  });

  const noProjects = projectState.projects.length === 0;

  const handleProjectScreen = () => {
    setShowProjectForm(true);
  };

  const handleChange = (e) => {
    e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addNewProject = () => {
    return;
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar handleClick={handleProjectScreen}></SideBar>
      {/* <div className="flex-grow pl-[50px]"></div> */}
      {!showProjectForm && noProjects && (
        <NoProject handleClick={handleProjectScreen}></NoProject>
      )}

      {showProjectForm && (
        <ProjectForm onChange={() => {}} onSubmit={() => {}}></ProjectForm>
      )}
      {/* <ProjectForm
        onChange={handleChange}
        onSubmit={handleSubmit}
      ></ProjectForm> */}
    </main>
  );
}

export default App;
