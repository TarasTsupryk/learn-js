import { Routes, Route } from "react-router-dom";

const Navigation = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Navigation;
