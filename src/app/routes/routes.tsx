import { MdAdminPanelSettings, MdDashboard } from 'react-icons/md';
import { RouteObject } from 'react-router-dom';
import Another from '../../pages/Another';
import Dashboard from '../../pages/Dashboard';

export interface AppRoute extends RouteObject {
  name: string;
  icon?: JSX.Element;
  path: string;
}

const routes: AppRoute[] = [
  {
    name: 'Dashboard',
    path: '/',
    element: <Dashboard />,
    icon: <MdDashboard />,
  },
  {
    name: 'Another',
    path: '/another',
    element: <Another />,
    icon: <MdAdminPanelSettings />,
  },
];

export default routes;
