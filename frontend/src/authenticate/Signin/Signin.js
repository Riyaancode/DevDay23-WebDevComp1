import { Link } from "react-router-dom";
import AuthContext from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

export default function Signin() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // console.log("Login: ",login)

  const authcontext = useContext(AuthContext);
  const navigate = useNavigate();

  const authCheck = () => {
    setTimeout(() => {
      fetch("http://localhost:5001/api/user/signin")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          authcontext.signin(data._id, () => {
            navigate("/");
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  };

  const loginUser = () => {
    fetch("http://localhost:5001/api/user/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((result) => {
        console.log("User login", result);
      })
      .catch((error) => {
        console.log("Something went wrong ", error);
      });
    authCheck();
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
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
                  value={login.email}
                  onChange={(e) => {
                    setLogin({ ...login, email: e.target.value });
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
                  value={login.password}
                  onChange={(e) => {
                    setLogin({ ...login, password: e.target.value });
                  }}
                />
                <div className="text-sm flex justify-between">
                  <div>
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password? &nbsp;
                    </a>
                  </div>
                  <div>
                    <Link className="font-semibold text-indigo-600 hover:text-indigo-400" to="/signup">Don't have an account? Signup here</Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={loginUser}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
