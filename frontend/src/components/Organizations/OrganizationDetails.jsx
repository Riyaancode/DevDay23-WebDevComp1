import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Projects from "../Projects/Projects";

export default function OrganizationDetails(params) {
  const name = useLocation().state;
  const [activeTab, setActiveTab] = useState({
    label: "Project",
    children: <Projects />,
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
  return (
    <>
      <h1 className="text-lg font-bold">{name}</h1>

      <div>
        <Tabs
          tabs={[
            { label: "Project", children: <Projects /> },
            {
              label: "My work item",
              children: <div>This is the Work tab.</div>,
            },
          ]}
        />
        <div>{activeTab.children}</div>
      </div>
    </>
  );
}
