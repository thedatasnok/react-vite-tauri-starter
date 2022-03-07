import { useRoutes } from "react-router-dom";
import routes from "./app/routes/routes";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  const routerElement = useRoutes(routes);

  return <div className='flex flex-row h-screen w-screen'>
    <Navigation />
    
    {routerElement}
  </div>;
};

export default App;
