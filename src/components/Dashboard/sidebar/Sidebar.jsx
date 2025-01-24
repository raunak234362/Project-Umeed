import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
const DashboardSidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: HomeIcon },
    { name: "Blogs", path: "/admin/blog", icon: DocumentTextIcon },
    { name: "Portfolio", path: "/admin/portfolio", icon: BriefcaseIcon },
    { name: "Skills", path: "/admin/skills", icon: AcademicCapIcon },
    { name: "Profile", path: "/admin/profile", icon: UserCircleIcon },
  ];
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
  };

  return (
    <div className="hidden md:flex flex-col w-64 bg-white shadow-lg h-full">
      {/* Logo/Brand */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 flex-grow">
        <div className="px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"} 
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-gray-700 rounded-lg transition-colors ${
                  isActive ? "bg-blue-50 text-blue-700" : "hover:bg-gray-100"
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
