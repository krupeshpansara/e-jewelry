import { Navigate, Route, Routes } from "react-router-dom";

const UserRoute = () => {
  const routeList = [
    {
      path: "/user",
      component: <div>working</div>,
    },
  ];
  return (
    <Routes>
      {routeList?.map((elm, index) => {
        return (
          <Route
            key={index}
            path={elm.path}
            element={<div>{elm.component}</div>}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default UserRoute;
