import { useState } from "react";
import SideBar from "./components/SideBar";
import logo from "../src/assets/no-projects.png";
import ProjectForm from "./components/ProjectForm";
import NoProject from "./components/NoProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleAddingProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <ProjectForm handleSubmit={() => {}} onChange={() => {}}></ProjectForm>
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
