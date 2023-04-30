import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function AddOrganization(params) {
  const name = useLocation().state;

  const [orgdata, setOrgData] = useState({
    name: "",
  });

  const addOrg = async () => {
    // e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/organization/add",
        orgdata
      );
      // console.log(res);
      setOrgData({ name: "" });
      alert("successful insert");
    } catch (error) {
      alert(error.response.data.error);

      console.log(error);
    }
  };

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setOrgData({ ...orgdata, [name]: value });
  };

  return (
    <>
      <h1 className="text-lg font-bold">{name}</h1>

      <div className="grid grid-cols-2">
        <div></div>
        <div>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h5 className="mt-4 tracking-tight text-gray-900">
                Talal.nasir@astera.com
              </h5>
              <h1 className="mt-7 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Name your DMS organisation
              </h1>
            </div>

            <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6">
                <div>
                  <div className="mt-2">
                    <input
                      required
                      value={orgdata.name}
                      onChange={handleInputs}
                      name="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => addOrg()}
                    className="flex w-300 justify-center rounded-md bg-blue-600 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
