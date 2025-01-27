import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Blogs", path: "/admin/blogs" },
    { name: "Portfolio", path: "/admin/portfolio" },
    { name: "Mission", path: "/admin/mission" },
    { name: "Profile", path: "/admin/profile" },
  ];
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="bg-white shadow-md md:hidden">
          <ul className="space-y-2 py-4 px-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  end={item.path === "/admin"}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-gray-700 ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)} // Close menu after clicking
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default DashboardHeader;
