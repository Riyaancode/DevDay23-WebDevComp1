import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const [currUser, setCurrUser] = useState({});
  const profileRef = useRef();
  // const authLocal = useAuth();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   setCurrUser(user);
  //   const handleDropDown = (e) => {
  //     if (!profileRef.current.contains(e.target)) setState(false);
  //   };
  //   document.addEventListener("click", handleDropDown);
  // }, []);

  const navigate = useNavigate();
  const locationPath = useLocation();
  const redirectPath = locationPath.state?.path || "/signin";

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-blue-600"
          onClick={() => setState(!state)}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXBx9D///+9w83Y3OHDydLIzdXt7/HN0tn3+Pnq7O/S1t319vfh5Ojd4OX8/P3r7fDhTC8lAAAKfElEQVR4nN2d67LrJgyFOWB8wZf9/m9bO44TOzEgoYVNumY6/dHdhC/chJCE+pddU1t3w2hcY21VVWr+x9rGmXHo6nbK//Uq54dP9WBspWepMy3/obJmqLNy5iJsu7FZyM7ZDpwLaWO6NlNLchC2nas83RYA1ZXpcnQmmnCqjWXTvSmtqcENwhJOnVPJeBukch2yTUjCBU9E96Z0f7hmoQhrI+y8D0hlelDLMIQDf2WJQ1rMaAUQTiNodH4xqhGwuIoJe5cH7wnpxINVSJiXD8IoIuyb3HwARgFhm73/3owCky6ZcDJX8T0YzeWEw4V4q4ZLCXt7ZQeu0jZtOiYRXjpAd4xJQzWBsL4Fb1XCyYNPeNkKeqaEbuQS9tWNfIsq7mxkEo53duAqPWYknG5YQr+lLcse5xDeucQcxVlwGIQFjNBNnJFKJ7zEyqZKN3DCyd4N9SHyZCQS9ncDnYi4bdAI/0oaoZs0zSFHIhxKBJwRSccNCmGhgEREAmGxgLRdI05Y0Db4LQJilLBoQApijLDgIboqOhcjhMUDxhHDhF35gDNi+H4jSFj/AuCMGDxqhAj73wCcFXIYBwinu9vNUMAMDxCWdpoIyaYQNuhWPMJKVuEvHP3nRS8hdp+YoRozdHXdt31fd4NppCENn1/g3TN8hMhldAmv+D7MtbDIhvVLfAuqhxC4ymjnX8z/kO5lz2rjIUStMtrGjKoB5qH0rDbnhCBzW1eUcIquAn3buRF+SoiZhJp85TdgVp3zqXhKCLmb0I7ump4w87GiEjrEt0Xs4U9hbHxHI0Q41nTDjfWBOGTP3G8nhIhvSrmthdwsUwiN/Gu4F2BPIcyo75/2ixBwZKL5MfMg6i/j6YtQPh2YawwY8Wvf/ySUf0dyDy6SmxpfX/9JKP0CSfTSIsBOFSaULzP0i71zyWfJx098JGzl80Aa8yo/1eij1+ZIKB4jxBuvkOQGx9GyORDKd4ozs4krsY163DEOhHLXDAAQME4Pa8G+TeIuFOyEe4l3rEMn7gnFXRjw6bEkXk/3nbgjlHchKtNFfJTad+KOULyQoroQcATfrXhvwqmQWbhIPhPfe+KbcBR+KGYh3Zol1duwUTk+VC7xaVh/E2KXaKnE3r73EeNFKF6hTx1dyZK25r3sbYTyrQI5SBHDdBtSCvaJ2NxWsf39+sU3QvnZGpuHLd67XmvNk1DukMVt96vEm/42qJ6EcucB4ty0F6xFKyHgujDNReqX3AB5uhtWQvkgBS80wCathPIhEY7aSRDghs/tCMUf9un+kQvgFFNvQsDvBd4sENvFc1w9CAG3PkUSmhch4OpOh9ubIMAotRshYsiX2Ifr4rAQIm6YyyTsnoSIe/si19LHfrEQIkIvoOffRZDg1molhPxaBdo0ah1ZChXoIbkXPROkpMHyuytIaAL8iA9q1eIdU6goPfT5ENYqBdlaFf6MD2nUYogozEIDP1yAInjnpUbBsiexR2DAAXjR/Lsr1GeBJyKqdMMwE0IiERXYqgFNncWqUbi0CuSOCCvwY2dCWCkP5DCFNar6p3BR+cDVFJgLMSlg+pY0HOotXL6O7hXw54KdL4C/uq5VB/swXCciU646hSxLBpqJ0MTOQUFztTHLKTItUI8Kc0rZPg+xJ2Lz441CmTSrAIYNzJxZ5RQ4kVI+TsGpq41C58JKz/rQWTPLwgmFLil4iQOr4BXmRFsGvgJABkKJaZOhAkCVgTAdMUc1qkxVENMGaqZqVFkYk5abPHVUsoxSleQgzlT2NReh0pZn3bS5ik5W8P3wLY6Nmq/SD37Hf4te2rjOWDXUou3Sg2iVxvNWdm/AZ4sP6XjF+DpzXWKHPR+eSNvBf2cz4WpG+GSwZ/xTad0MZz3ZDxeURJ3P+NeUj9eqGV9PdC2PeI1Npmc/PjVcRLjoUVxoeZfM+4hXDnVIf2mJ0jXS512idA+8tyhTE/DuqUhVyPvDImWBd8BlygHv8cvUCIzFKFL6DxdPU6Ye8TSgmKgypYFxbWVqjWu76eWfS2SA8aVF6hlf+j9eap4xwv9ju+0Z542wanQOyZu1xerLJuJ8qm2cM3g511QyR8Ar3yJ9Imrthj7nq9pTP7j0znzlzKRORNRrrzF1qQ65R4mA9Nw13aCTSPxKcxrvctcSjG9t4Q9oB5Xi+F/r5STmkCbWfpSIP9DWjMHEPOBrO3AV+1G0fR4wc7+oci6ffk28FfGQy807QaHTY+hiHYOeaa0JNRXuA+T14qGmAmeYwnMpOWrpgB91MeirKby0AE+MS4iN7Plv8lqMzsLjinrf+VWfhnp9ga2VlCLiVPyqMURcpm4eo4uI4/SrThQx3gOXUpEuUmzFSa0v0pZYQBdSO/H157yaezduhTtRJtRZzT1KEQN0wnaaCBfzp3UTCXYNvDREmgh9cVr7krBhlDFICcPUU780ukjBc+5TFTVPPDVoo50IrwyRqpgV7a0jHOtEeHWPVMW6wlsLOvZ/FrLQRJeaQD3v2HJ6KUZI4WYGarJHfMP3W92bgtZ3sK5++GzyI4TBtxHC/f8jhB9/y3mj5CcIo2+UhOyFnyCMvjMT2jF+gZDwVlBgsfkFQsJ7T4HF5hcIv/+W8+5a+YTEd9e8lk35hMS387wfUDwh+f1Dn6+ndELGG5aesgaFE3LeIfXt+2U4onzF3FhvyXo+44a77TN57th47wF7pmIRnpr2fIwy33T2meAaXVyer/OUdv/w4r6tru++ufDEKyS8re49ZdwUpvCUx80W8OQGCL35Qjdez/iyJQO/esi75DtIQSoJJckT/BV0cwb9Z757rJvWm97zRHn4zi/sIfT6NKobnMO+xkSGVMQH6kW8fKROvvDEWEtiXl5vIjT/5W2R/nzRwtGfOurH9ud6X3hR439dPm5Ixj31AcTmovCozhvuTbCUCXcRARfqJaZ46w8QpqwGlNuWEGKVffsPlEQgLXek+6TQjWTmcO9QVAJtIaDdmAVDWGgVTJLUefb4VbThQ7wTDFbh0pkYw3yKOHaot55TOP4hw1gdwnyWuh3T73UjKQ+6Qb2Vu2gaw/lAjGMq4+Y6VudFV4FKNCzVsQQSzi7FuZuPh8zpRm7n9CaezsXZoljRB1M8cUUrIxmt/Tz7Yt+hyVPwIWZ8BaEi0dxC1yUN19qEF5fn5zPtKG4ESU0KQtbajn8syn4gFh1iG1H8GBlqbS6tKzfUBMy+Gy01xzDBu5AQBfRHa8yG2ZhhKxB11KNclLOKkUGZYgUnxTlx08geSb22ccaM47jkvzbWVvxU3zSPe1okV5+W1bkSJSaE0osUIgiBT2yQleoYSo/Gu7TYhOBKSBBv2GaueLjjk5xdRBGVeatWvvhk5xZhzGjURr6bT0w492PWsRqvDpqfcJ6PJlMZRK0NwHeAiWzuyGYXgw9UsQEVu0051XHwlEG5RYDR6V0D6sjl+IVrFjT+fuocx44+pcPi/QMTLqpN+pycTyIG7kPPkUPRDi7uizihc10Ot2uuLJG2Gxvq6Wj+u2bMQrcoax5MWw/OPuoG+8hUZd18QM7ZiAsyfZaz/DCux96qWmol2+U0PA7d+dkfrP8AELeBvwZOOcwAAAAASUVORK5CYII="
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">{currUser.name}</span>
          <span className="block text-sm text-gray-500">{currUser.email}</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        <li>
          <Link
            to={""}
            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={""}
            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
          >
            Settings
          </Link>
        </li>
        {/* <li>
          <Link
            to={"/signin"}
            onClick={() => {
              authLocal.logout();
              // navigate(redirectPath, { replace: true });
            }}
            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
          >
            Signout
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

// const organisation = [
//   {
//     _id: "644e05ff7a881586fb08954b",
//     name: "riyan",
//     members: ["644e0b6c6151ee8e131003ad"],
//     __v: 1,
//   },
//   {
//     _id: "644e0deb4f9fb735ca5df5f6",
//     name: "Geeks of Kolachi",
//     members: ["644e0b6c6151ee8e131003ad", "644e22a0ca859ec4b71ff989"],
//     __v: 2,
//   },
// ];

export default function Organizations() {
  const [menuState, setMenuState] = useState(false);
  const [organisation, setOrganisation] = useState([]);
  const [activeLink, setActiveLink] = useState(organisation?.[0]?.name);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(organisation[0].name);
    getOrg();
  }, []);

  const getOrg = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/organization/get");
      console.log(res.data);
      setOrganisation(res.data);
      navigate(res.data[0].name, { state: res.data[0] });
    } catch (error) {
      console.log(error);
    }
  };

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Dashboard", path: "/" },
    { title: "Inventory", path: "/inventory" },
    { title: "Purchases", path: "/purchase" },
    { title: "Sales", path: "/sales" },
    { title: "Manage Stores", path: "/managestores" },
  ];
  // const authLocal = useAuth();
  // console.log(authLocal);
  return (
    <>
      <nav className="bg-white border-b">
        <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
          <div className="flex-none lg:flex-initial">
            <Link to={"/"} className="flex align-middle justify-center ">
              {/*  <img
                src={require("../../assets/img/logo.png")}
                width={50}
                // height={50}
                alt="Float UI logo"
              /> */}
              <h2 className="text-2xl font-bold ml-1 text-gray-800 my-auto ">
                Dynamic Management System
              </h2>
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div
              className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:border-none ${
                menuState ? "" : "hidden"
              }`}
            >
              <ul className="space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                {console.log(organisation)}
                {organisation.map((item) => (
                  <Link
                    key={item._id}
                    onClick={() => setMenuState(!menuState)}
                    className="text-gray-600 block hover:text-gray-900"
                    state={item.name}
                    to={item.name}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
              <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" />
            </div>
            <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
              <ProfileDropDown class="hidden lg:block" />
              <button
                className="outline-none text-gray-400 block lg:hidden"
                onClick={() => setMenuState(!menuState)}
              >
                {menuState ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <div className="flex h-screen flex-col hidden lg:block  justify-between border-r bg-white">
          <div className=" w-52 py-3">
            <h2 className="text-lg font-bold ml-3 mb-3 text-gray-900">
              Organisations
            </h2>
            <nav
              aria-label="Main Nav"
              className=" flex flex-col border-t-2 space-y-1"
            >
              {organisation.map((item) => (
                <Link
                  to={item.name}
                  key={item._id}
                  state={item}
                  className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 ${
                    activeLink === item.name
                      ? "bg-gray-200 text-blue-700"
                      : " text-gray-700"
                  }`}
                  onClick={() => setActiveLink(item.name)}
                >
                  <span className="text-lg font-medium"> {item.name} </span>
                </Link>
              ))}
              <Link
                to={"/AddOrganization"}
                // state={""}
                className={`flex items-center gap-2 px-4 py-2 hover:bg-blue-700 hover:text-gray-100 ${
                  activeLink === "AddOrganization"
                    ? "bg-blue-700 text-gray-50"
                    : " text-white bg-blue-600"
                }`}
                onClick={() => setActiveLink("AddOrganization")}
              >
                <span className="text-lg font-medium"> Add Organization </span>
              </Link>
            </nav>
          </div>
        </div>

        <div className="mx-auto overflow-auto p-4 w-full bg-gray-50">
          <Outlet />
        </div>
      </div>
    </>
  );
}
