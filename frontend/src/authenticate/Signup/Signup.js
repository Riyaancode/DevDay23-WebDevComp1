import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "developer",
  });
  // console.log("userD: ", userDetails);

  const navigate = useNavigate();

  const registerUser = () => {
    fetch("http://localhost:5001/api/user/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/signin");
      })

      .catch((error) => {
        console.log("Something went wrong ", error);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 " onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                value={userDetails.firstName}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    firstName: e.target.value,
                  });
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                value={userDetails.lastName}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  value={userDetails.email}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, email: e.target.value });
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  value={userDetails.password}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    });
                  }}
                />
                <div className="text-sm flex justify-end">
                  <div>
                    <Link
                      className="font-semibold text-indigo-600 hover:text-indigo-400"
                      to="/signin"
                    >
                      Already have an account? Signin here
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={registerUser}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
