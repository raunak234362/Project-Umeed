import { Link } from "react-router";

const Header = ()=> {
  // Check for saved user preference in localStorage

  return (
    <header className=" text-gray-700 p-4 sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Umeed Kiran
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;