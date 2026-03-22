import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import DJProfilePage from "../Pages/DJProfilePage";
import DJDashboard from "../Components/Main/DJpages/DJDashboard/DJDashboard";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import ServicesPage from "../Pages/ServicesPage";
import UserProfilePage from "../Pages/UserProfilePage";
import { SafeRoute } from "../auth/Role";
import CardPage from "../Pages/CardPage";
import BookingPage from "../Pages/BookingPage";
import DJProfileEdit from "../Components/Main/DJpages/DJProfile/DJProfileEdit/DJProfileEdit";
import ServiceDetails from "../Components/Main/Services/ServiceDetails";
import BookingForms from "../Forms/BookingForms";
//  All pages are eagerly imported at the top. Use React.lazy() to
//             code-split and only load pages when they are visited:
//             const DJDashboard = React.lazy(() => import('../Components/Main/DJpages/DJDashboard/DJDashboard'));
//             Then wrap RouterProvider in <React.Suspense fallback={<div>Loading...</div>}>.

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        // path: "dj/:id",
        path: "/djprofile",
        element: (
          <SafeRoute allow="dj">
            <DJProfilePage />
          </SafeRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <SafeRoute allow="user">
            <UserProfilePage />
          </SafeRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "dj-dashboard",
        element: (
          <SafeRoute allow="dj">
            <DJDashboard />
          </SafeRoute>
        ),
      },
      {
        path: "/cards",
        element: <CardPage />,
      },
      {
        path: "/new-booking",
        element: (
          <SafeRoute allow="user">
            <BookingPage />
          </SafeRoute>
        ),
      },
      {
        path: "/edit-djprofile",
        element: (
          <SafeRoute allow="dj">
            <DJProfileEdit />
          </SafeRoute>
        ),
      },
      {
        path: "/services",
        element: <ServicesPage />,

        // /services route is defined TWICE  The second one
        //             is completely ignored by the router. Remove the duplicate.
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/package/:serviceId",
        element: (
          <SafeRoute allow="user">
            <BookingForms />
          </SafeRoute>
        ),
      },
      {
        path: "/music",
        element: <ServicesPage />,
      },
      {
        path: "/dj",
        element: <ServicesPage />,
      },
      {
        path: "/decorations",
        element: <ServicesPage />,
      },
      {
        path: "/photographers",
        element: <ServicesPage />,
      },
      {
        path: "/venues",
        element: <ServicesPage />,
      },
      /// /music, /dj, /decorations, /photographers, /venues all render
      //             the exact same <ServicesPage /> component. This works but ServicesPage
      //             has no way to know which category was requested from the URL.
      //             Use a single route with a param instead:
      //             { path: "/services/:category", element: <ServicesPage /> }
      //             Then read useParams() inside ServicesPage to filter by category.
    ],
  },
]);
