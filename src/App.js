import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Layout } from "./components/Layout/Layout";
import { Loader } from "./components/Loader/Loader";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";

import { selectIsRefreshing } from "./redux/auth/selectors";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader label="Loading user..." fullPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
