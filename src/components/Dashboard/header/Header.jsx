import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Blogs", path: "/dashboard/blogs" },
    { name: "Portfolio", path: "/dashboard/portfolio" },
    { name: "Skills", path: "/dashboard/skills" },
    { name: "Profile", path: "/dashboard/profile" },
  ];

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
        </nav>
      )}
    </header>
  );
};

export default DashboardHeader;
