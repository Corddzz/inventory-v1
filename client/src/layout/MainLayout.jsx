import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar Componetn*/}
      <Navbar />

      {/* Sidebar Component */}
      <aside className="p-2">
        <Sidebar />
      </aside>

      {/* Content */}
      {/* \moved to sidebar component */}
      {/* <main className="p-4">
        <Outlet />
      </main> */}

      {/* Footer Component */}
    </div>
  );
};

export default MainLayout;
