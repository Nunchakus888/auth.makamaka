import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { Navigate } from 'react-router-dom';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/user/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/user/authentication/authentication3/Register3')));
const AuthReset3 = Loadable(lazy(() => import('views/user/authentication/authentication3/Reset3')));
const AuthRevise3 = Loadable(lazy(() => import('views/user/authentication/authentication3/Revise3')));
const AuthMainReset = Loadable(lazy(() => import('views/user/authentication/AuthMainReset')));
const AuthMailAuth3 = Loadable(lazy(() => import('views/user/authentication/authentication3/Mailbox3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <AuthLogin3 />
    },
    {
      path: '/login',
      element: <AuthLogin3 />
    },
    {
      path: '/register',
      element: <AuthRegister3 />
    },
    {
      path: '/checking',
      element: <AuthMailAuth3 />
    },
    {
      path: '/reset',
      element: <AuthMainReset />,
      children: [
        {
          path: '',
          element: <AuthReset3 />,
        }
      ]
    },
    {
      path: '/reset_verified',
      element: <AuthRevise3 />,
      children: [
        {
          path: '',
          element: <AuthRevise3 />,
        },
        {
          path: '*',
          element: <AuthRevise3 />
        }
      ]
    },
  ]
};


export default AuthenticationRoutes;
