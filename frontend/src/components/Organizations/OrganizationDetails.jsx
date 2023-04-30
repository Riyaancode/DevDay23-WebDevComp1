import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Projects from "../Projects/Projects";
import axios from "axios";
import MyWorkItems from "../Projects/MyWorkItems";

export default function OrganizationDetails(params) {
  const org = useLocation().state;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActiveTab({
      label: "Project",
      children: <Projects orgId={org._id} open={() => setOpen(true)} />,
    });
  }, [org]);

  const [activeTab, setActiveTab] = useState({
    label: "Project",
    children: <Projects orgId={org._id} open={() => setOpen(true)} />,
  });
  const Tab = ({ label, onClick, children }) => {
    return (
      <button
        className={`-mb-px font-semibold border-current py-2 px-3 text-gray-800 ${
          activeTab.label == label ? "border-b-2 border-blue-600" : ""
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };

  const Tabs = ({ tabs }) => {
    return (
      <div>
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            label={tab.label}
            onClick={() => setActiveTab(tab)}
          >
            {tab.children}
          </Tab>
        ))}
      </div>
    );
  };

  const AddProjectModal = () => {
    const [project, setProjectDetails] = useState({
      name: "",
      admin: "644e0b6c6151ee8e131003ad",
      organization: org._id,
    });

    const addProject = async () => {
      console.log(project);
      try {
        const res = await axios.post(
          "http://localhost:5001/api/project/add",
          project
        );
        console.log(res.data);

        setProjectDetails({ name: "" });

        alert("successful insert");
        setOpen(false);
      } catch (error) {
        alert(error.response.data.error);

        console.log(error);
      }
    };
    const handleInputs = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      setProjectDetails({ ...project, [name]: value });
    };
    return (
      <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  bg-slate-950 bg-opacity-40 focus:outline-none">
        <div className="relative w-full h-full max-w-2xl  md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <section className="bg-white rounded-lg">
              <div className=" p-4 mx-auto lg:py-5">
                <div className="flex justify-between">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">
                    Add Project
                  </h2>
                  <button
                    type="button"
                    className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        value={project.name}
                        onChange={handleInputs}
                        placeholder="Type product name here"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      onClick={() => addProject()}
                    >
                      Add product
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {open && <AddProjectModal />}
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">{org.name}</h1>
      </div>
      <div>
        <Tabs
          tabs={[
            {
              label: "Project",
              children: <Projects orgId={org._id} open={() => setOpen(true)} />,
            },
            {
              label: "My work item",
              children: <MyWorkItems />,
            },
          ]}
        />
        <div>{activeTab.children}</div>
      </div>
    </>
  );
}
