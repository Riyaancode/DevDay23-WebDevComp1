import { useState } from "react";

const workitems = [
  {
    name: "test1",
    description: "demo2121",
    assignedTo: "Jhon",
    project: "Tracker App",
  },
  {
    name: "test2",
    description: "demo2121",
    assignedTo: "Jhon",
    project: "Tracker App",
  },
  {
    name: "test3",
    description: "demo2121",
    assignedTo: "Jhon",
    project: "Tracker App",
  },
];

const Items = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
          {workitems.map((item) => (
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
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
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
  );
};

export default function WorkItems(params) {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState({
    label: "New Work Item",
    children: <Items />,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    ),
  });
  const Tab = ({ label, icon, onClick, children }) => {
    return (
      <button
        className={`-mb-px font-semibold border-current py-2 px-3 flex text-gray-800 ${
          activeTab.label === label ? "border-b-2 border-blue-600" : ""
        }`}
        onClick={onClick}
      >
        {icon}
        {label}
      </button>
    );
  };

  const Tabs = ({ tabs }) => {
    return (
      <div className="flex">
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            label={tab.label}
            icon={tab.icon}
            onClick={() => setActiveTab(tab)}
          >
            {tab.children}
          </Tab>
        ))}
      </div>
    );
  };

  const AddWorkItems = () => {
    const handleInputs = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      if (e.target.tagName === "INPUT") {
        // setStoresData({ ...storesdata, [name]: value });
      } else if (e.target.tagName === "TEXTAREA") {
        // setStoresData({ ...storesdata, [name]: value });
      }
    };
    return (
      <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  bg-slate-950 bg-opacity-40 focus:outline-none">
        <div className="relative w-full h-full max-w-2xl  md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <section className="bg-white rounded-lg">
              <div className=" p-4 mx-auto lg:py-5">
                <div className="flex justify-between">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">
                    Add Work Item
                  </h2>
                  <button
                    type="button"
                    className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    onClick={() => setShowModal(false)}
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
                <form action="#">
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
                        // value={productsdata.name}
                        // onChange={handleInputs}
                        placeholder="Type product name here"
                        required
                      />
                    </div>

                    {/* <div className="sm:col-span-2">
                          <label
                            htmlFor="my-dropdown"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Assign To:
                          </label>
                          <select
                            id="my-dropdown"
                            value={salesdata.store_id}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            onChange={handleOptionChange}
                          >
                            <option>--Please choose an option--</option>
                            {storesData.map((item) => (
                              <option key={item._id} value={item._id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div> */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows="8"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Write a product description here..."
                        // value={storesdata.description}
                        name="description"
                        onChange={handleInputs}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      type="submit"
                      className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      // onClick={addProducts}
                    >
                      Add product
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {showModal && <AddWorkItems />}

      <div className="mt-3">
        <h1 className="text-2xl font-bold ml-3 mb-1 text-gray-900">
          Work Items
        </h1>
      </div>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="mb-2 mt-3 ml-3">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2 -ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add Work Item
            </button>
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2 -ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Delete Work Item
            </button>
          </div>
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
              {workitems.map((item) => (
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
      </div>
    </>
  );
}
