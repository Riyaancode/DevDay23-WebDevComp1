import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const projects = [
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

export default function Projects({ orgId, open }) {
  const [projects, setProjectsDetails] = useState([]);
  const [mainPSource, setMainPSource] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    console.log(mainPSource);

    getProjects();
  }, [orgId]);

  const getProjects = async () => {
    if (orgId) {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/project/get/organization/${orgId}`
        );
        console.log(res.data);
        setProjectsDetails(res.data);
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
        {msg
          ? msg
          : projects.map((item) => (
              <Link
                to={`/${item.organisationName}/${item.path}`}
                key={item._id}
                state={item}
              >
                <article
                  key={item.name}
                  className="hover:animate-background rounded-xl bg-gradient-to-r m-2 from-blue-300 via-blue-500 to-blue-700 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                >
                  <div className="rounded-[10px] h-full bg-white p-4 sm:p-6">
                    <time
                      dateTime="2022-10-10"
                      className="block text-xs text-gray-500"
                    >
                      10th Oct 2022
                    </time>

                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>

                    <div className="flex items-center -space-x-2 overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/women/79.jpg"
                        className="w-7 h-7 rounded-full border-2 border-white"
                        alt="demo"
                      />
                      <img
                        src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                        className="w-7 h-7 rounded-full border-2 border-white"
                        alt="demo"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                        className="w-7 h-7 rounded-full border-2 border-white"
                        alt="demo"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/86.jpg"
                        className="w-7 h-7 rounded-full border-2 border-white"
                        alt="demo"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                        className="w-7 h-7 rounded-full border-2 border-white"
                        alt="demo"
                      />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
      </div>
    </>
  );
}
