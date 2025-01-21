import { Outlet } from "react-router-dom"
import { app, analytics } from "./firebase/firebase";

function App() {
  console.log("Firebase App Initialized: ", app);
  console.log("Firebase Analytics: ", analytics);

  return (
    <div>
     <main>
      <Outlet />
     </main>
    </div>
  )
}

export default App
