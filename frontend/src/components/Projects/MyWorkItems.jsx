import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const workItems = [
//   {
//     name: "Tracker App",
//     organisationName: "GeeksofKolachi",
//     path: "trackerapp",
//   },
//   {
//     name: "Inventory Managemnet System",
//     organisationName: "GeeksofKolachi",
//     path: "iventorymanagementsyatem",
//   },
//   { name: "CRM", organisationName: "GeeksofKolachi", path: "crm" },
// ];

export default function MyWorkItems({ orgId, open }) {
  const [workItems, setWorkItems] = useState([]);
  const [mainPSource, setMainPSource] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    console.log(mainPSource);

    getworkItems();
  }, [orgId]);

  const getworkItems = async () => {
    if (orgId) {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/project/get/organization/${orgId}`
        );
        console.log(res.data);
        setWorkItems(res.data);
        setMainPSource(res.data);
        // navigate(res.data[0].name, { state: res.data[0] });
      } catch (error) {
        console.log(error);
        setMsg("NotFound");
      }
    } else {
      console.log(orgId);
    }
  };

  return (
    <>
      <div className="items-center justify-end flex">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
          type="button"
          onClick={open}
        >
          Add Project
        </button>
      </div>
      <div className="p-4 grid grid-cols-3">
        <table className="w-full text-sm text-left text-gray-500 mt-4">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Assigned To
              </th>
              <th scope="col" className="px-6 py-3">
                State
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {workItems.map((item) => (
              <tr
                key={item.name}
                className="bg-white border-b  hover:bg-gray-50 "
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-3"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4">6938</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.name}
                </th>
                <td className="px-6 py-4"> {item.name}</td>
                <td className="px-6 py-4"> {item.assignedTo}</td>
                <td className="px-6 py-4"> {item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
