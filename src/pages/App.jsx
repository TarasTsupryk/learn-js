import Navigation from "../utils/Navigation";
import appRoutes from "./App.routes";

const App = () => {
  return (
    <div>
      <Navigation routes={appRoutes} />
    </div>
  );
};

export default App;
