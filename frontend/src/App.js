import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Organization from "./components/Organizations/Organizations";
import Signin from "./authenticate/Signin/Signin";
import Signup from "./authenticate/Signup/Signup";
import ProjectDetails from "./components/Projects/ProjectDetails";
import OrganizationDetails from "./components/Organizations/OrganizationDetails";
import AddOrganization from "./components/Organizations/AddOrganization";
import AuthContext from "./AuthContext";
import ProtectedWrapper from "./ProtectedWrapper";

function App() {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);
  let myLoginUser = JSON.parse(localStorage.getItem("user"));
  // console.log("USER: ", user);

  useEffect(() => {
    if (myLoginUser) {
      setUser(myLoginUser._id);
      setLoader(false);
    } else {
      setUser("");
      setLoader(false);
    }
  }, [myLoginUser]);

  const signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  let value = { user, signin, signout };

  if (loader)
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>LOADING...</h1>
      </div>
    );

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedWrapper>
                <Organization />
              </ProtectedWrapper>
            }
          >
            <Route
              path="/:organisationName/"
              element={<OrganizationDetails />}
            />
            <Route path="/AddOrganization" element={<AddOrganization />} />
          </Route>
          <Route
            path="/:organisationName/:projectName"
            element={
              <ProtectedWrapper>
                <ProjectDetails />
              </ProtectedWrapper>
            }
          />
          <Route path="*" element={<h1>404 page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
