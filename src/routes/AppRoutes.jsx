import { Route, Routes } from 'react-router-dom';
import { PATH } from '../utils/paths/paths';
import PageRoutes from '../pages';

const routeComponents = [
  { path: PATH.LOGIN, component: PageRoutes.LoginPage },
  { path: PATH.REGISTER, component: PageRoutes.JoinPage },
  { path: PATH.RESET_PASSWORD, component: PageRoutes.ResetPasswordPage },
  { path: PATH.MAIN_SCREEN, component: PageRoutes.MainScreenPage },
  { path: PATH.DIRECT_MESSAGE, component: PageRoutes.DirectMessagePage },
  { path: PATH.SERVER_CHANNEL, component: PageRoutes.ServerChannelPage },
];

export const AppRoutes = () => {
  return (
    <Routes>
      {routeComponents.map(({ path, component: PageComponent }) => (
        <Route key={path} path={path} element={<PageComponent />} />
      ))}
    </Routes>
  );
};
