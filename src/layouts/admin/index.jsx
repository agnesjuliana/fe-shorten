// AuthLayout.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "../../routes";
import Navbar from "../../components/navigation/Navbar";

function AdminLayout() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-gray-200 h-screen col-span-2">
          <h1>Admin sidebar</h1>
        </div>

        <div className="col-span-10">
          <Navbar />

          <Routes>
            {routes.map((prop, key) => {
              if (prop.layout === "/admin") {
                return (
                  <Route path={prop.path} element={prop.component} key={key} />
                );
              } else {
                return null;
              }
            })}
            <Route path="*" element={<Navigate to="/admin/home" />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
