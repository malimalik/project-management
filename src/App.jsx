import { useState } from "react";
import SideBar from "./components/SideBar";
import logo from "../src/assets/no-projects.png";
import ProjectForm from "./components/ProjectForm";
function App() {
  const [addProjectMode, setAddProjectMode] = useState(false);

  const handleProjectScreen = () => {
    setAddProjectMode(true);
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* {!addProjectMode && (
        <div className="mt-6 text-center">
          <img
            src={logo}
            alt="no-projects"
            className="w-16 h-16 object-contain mx-auto"
          />
          <h1 className="mt-8 mb-8 text-center text-5xl font-bold">
            No project selected
          </h1>
          <p className="text-stone-600 mb-4 text-center">
            Select a project or get started with a new one
          </p>

          <button
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 text-center"
            onClick={handleProjectScreen}
          >
            + Add Project
          </button>
        </div>
      )} */}

      <ProjectForm></ProjectForm>

      <SideBar></SideBar>
    </main>
  );
}

export default App;
