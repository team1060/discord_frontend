import { Route, Routes } from 'react-router-dom';
import { PATH } from 'utils/paths/paths';
import PageRoutes from 'pages';
import ThemeProvider from 'components/ThemeProvider';

const routeComponents = [
  { path: PATH.LOGIN, component: PageRoutes.LoginPage, theme: 'primary' },
  { path: PATH.REGISTER, component: PageRoutes.JoinPage, theme: 'primary' },
  { path: PATH.RESET_PASSWORD, component: PageRoutes.ResetPasswordPage, theme: 'primary' },
  { path: PATH.MAIN_SCREEN, component: PageRoutes.MainScreenPage, theme: 'dark' },
  { path: PATH.DIRECT_MESSAGE, component: PageRoutes.DirectMessagePage, theme: 'dark' },
  { path: PATH.SERVER_CHANNEL, component: PageRoutes.ServerChannelPage, theme: 'dark' },
];

export const AppRoutes = () => {
  return (
    <Routes>
      {routeComponents.map(({ path, component: PageComponent, theme }) => (
        <Route
          key={path}
          path={path}
          element={
            <ThemeProvider theme={theme}>
              <PageComponent />
            </ThemeProvider>
          }
        />
      ))}
    </Routes>
  );
};
