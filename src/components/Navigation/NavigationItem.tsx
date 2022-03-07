import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../app/routes/routes';

const NavigationItem: React.FC<AppRoute> = ({ name, icon, path }) => {

  icon = icon
  ? React.cloneElement(icon, {
      className: 'w-6 h-6 text-gray-300',
    })
  : undefined;

  return <NavLink to={path} className={({isActive}) => `${isActive ? 'bg-zinc-700' : ''} p-1 mx-1 rounded-sm flex flex-row space-x-2`}>
    {icon}
    <p className='font-semibold'>
      {name}
    </p>
  </NavLink>;
};

export default NavigationItem;
