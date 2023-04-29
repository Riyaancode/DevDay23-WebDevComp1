import { Fragment } from "react";
import { useState } from "react";

export default function Overview({ name }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div show={open} as={Fragment}>
        {/* <Dialog as="div" className="relative z-10" onClose={setOpen}> */}
        {/* <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child> */}

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              {/* <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                > */}
              {/* <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    > */}
              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                <button
                  type="button"
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                </button>
              </div>
              {/* </Transition.Child> */}
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  {/* <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Panel title
                        </Dialog.Title> */}
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/* Your content */}
                </div>
              </div>
              {/* </Dialog.Panel>
                </Transition.Child> */}
            </div>
          </div>
        </div>
        {/* </Dialog> */}
      </div>

      <div className="bg-white flex justify-between align-middle p-5 rounded">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {name}
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Let's Build a new Big Thing! 🚀
          </p>
        </div>
        <div className="items-center flex">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
            type="button"
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
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            Invite
          </button>
        </div>
      </div>
    </>
  );
}
