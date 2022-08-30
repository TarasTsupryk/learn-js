import Navigation from "../../utils/Navigation";
import appRoutes from "./App.routes";
import classNames from "./app.module.css";

const App = () => {
  return (
    <div className={classNames.app}>
      <Navigation routes={appRoutes} />
    </div>
  );
};

export default App;
