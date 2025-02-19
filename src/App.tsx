import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipientsPage from "./pages/RecipientsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import GroupsPage from "./pages/GroupsPage";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: undefined,
        },
        {
          path: "/signIn",
          element: <SignInPage />,
          loader: undefined,
        },
        {
          path: "/signUp",
          element: <SignUpPage />,
          loader: undefined,
        },
        {
          path: "/recipients",
          element: <RecipientsPage />,
          loader: undefined,
        },
        {
          path: "/groups",
          element: <GroupsPage />,
          loader: undefined,
        },
      ]
    },
  ])


  return (
    <RouterProvider router={router} />
  );
}
  
export default App;