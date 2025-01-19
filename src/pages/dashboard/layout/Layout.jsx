import { useCallback, useState } from "react";
import { Sidebar, Button } from "../../../pages/index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, [setSidebarOpen]);
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden md:flex-row bg-gradient-to-r from-green-300/50 to-teal-300">
      {/* Sidebar */}
      {/* 
        {!isConnected && (
          <>
            <div className="absolute top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50">
              <div className="flex items-center justify-center w-full h-full px-20 py-10">
                <div className="px-32 py-20 text-red-700 bg-white border-2 border-red-700 rounded-3xl">
                  {result
                    ? "Connecting to Server, Please Wait..."
                    : "Connection Failed, Please Check Your Internet Connection"}
                </div>
              </div>
            </div>
          </>
        )} */}

      <div className="flex flex-col w-full">
        <div className=" shadow-2xl drop-shadow-lg">
          {/* <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
          <div className="bg-white flex flex-row justify-between items-center p-4">
            <div >
              <Button className="p-5" sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>Click</Button>
            </div>
            <div className="bg-blue-500 rounded-full p-5"></div>
          </div>
        </div>
        {/* Header */}
        <div className="flex flex-row">
          <div
            className={`fixed md:static flex flex-col md:bg-opacity-0 bg-white w-64 z-20 transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:w-64`}
          >
            <div className="flex items-center justify-between p-4">
              <Sidebar />
            </div>
          </div>
          {/* Main Content */}
          <div
            className={`flex h-[89vh] overflow-y-auto flex-grow transition-all duration-300 ${
              sidebarOpen ? "md:ml-64 ml-0 bg-black/50" : "md:ml-0 ml-0"
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
