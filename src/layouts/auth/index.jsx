// AuthLayout.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "../../routes";
import Login from "../../views/auth/login";

// import image
import loginAsset from "../../assets/auth/login-asset.png";

function AuthLayout() {
  return (
    <>
      <div className="grid grid-cols-2">
      <div>
          <Routes>
            {routes.map((prop, key) => {
              if (prop.layout === "/auth") {
                return (
                  <Route path={prop.path} element={prop.component} key={key} />
                );
              } else {
                return null;
              }
            })}
            <Route path="*" element={<Navigate to="/auth/login" />} />
          </Routes>
        </div>

        <div>
          {/* <h1 className="text-3xl font-bold underline">
            Hello world! AuthLayout
          </h1> */}
          <img src={loginAsset} alt="login asset" />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
