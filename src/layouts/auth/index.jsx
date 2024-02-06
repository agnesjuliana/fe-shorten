// AuthLayout.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "../../routes";
import Login from "../../views/auth/login";

function AuthLayout() {
  return (
    <Routes>
      {routes.map((prop, key) => {
        if (prop.layout === "/auth") {
          return (
            <Route
              path={prop.path}
              element={prop.component}
              key={key}
            />
          );
        } else {
          return null;
        }
      })}
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}

export default AuthLayout;
