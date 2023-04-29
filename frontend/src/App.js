import { BrowserRouter, Routes, Route } from "react-router-dom";

import Organization from "./components/Organizations/Organizations";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import OrganizationDetails from "./components/Organizations/OrganizationDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Organization />}>
          <Route path="/:organisationName/" element={<OrganizationDetails />} />
        </Route>
        <Route
          path="/:organisationName/:projectName"
          element={<ProjectDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
