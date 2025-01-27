import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Toaster position="top-right" />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
