import React from "react";
import routes from "../../app/routes/routes";
import NavigationItem from "./NavigationItem";

const Navigation: React.FC = () => {
  return <div className='flex flex-col bg-zinc-800'>
    <h1 className='text-lg font-semibold mx-4 my-2'>
      React + Tauri
    </h1>

    <nav className='flex flex-col space-y-2'>
      {routes.map((route, idx) => (
        <NavigationItem key={idx} path={route.path} name={route.name} icon={route.icon} />
      ))}
    </nav>
  </div>;
};

export default Navigation;
