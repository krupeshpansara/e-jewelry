import { useSelector } from "react-redux";
import "./App.css";
import UserRoute from "./routes/UserRoute";
import AuthRoute from "./routes/AuthRoute";
function App() {
  const reduxData = useSelector((state) => state.global);
  // const localData = getDataFromLocalStorage();
  // const isAuth = localData?.token ? true : false;
  const localData = {};
  const isAuth = false;

  return (
    <div className="app-container">
      {isAuth ? (
        localData?.role === "admin" ? (
          <div>admin</div>
        ) : (
          <UserRoute />
        )
      ) : (
        <AuthRoute />
      )}
    </div>
  );
}

export default App;
