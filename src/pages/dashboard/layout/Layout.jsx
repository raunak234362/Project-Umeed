
import { Outlet } from "react-router-dom";
import { DashboardHeader, DashboardSidebar } from "../../index";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row bg-gray-100">
      {/* Header for mobile */}
      <div className="md:hidden">
        <DashboardHeader />
      </div>

      {/* Sidebar for desktop */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto mt-16 md:mt-0">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
