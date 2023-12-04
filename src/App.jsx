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

  // To dos: this needs to handle an object. 
  // The object must dynamically identify which specific property needs to be added. 
  // e.g. [e.target.name] = e.target.value
  const handleChange = (e) => {
      setShowProjectForm((prevState) => {
        return [
          ...prevState, 
          newProject: {

          }
        ]
      })
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
        <ProjectForm onChange={() => {}} handleSubmit={handleSubmit}></ProjectForm>
      )}
    </main>
  );
}

export default App;
