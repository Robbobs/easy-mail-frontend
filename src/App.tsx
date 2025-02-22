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
        },
        {
          path: "/signIn",
          element: <SignInPage />,
        },
        {
          path: "/signUp",
          element: <SignUpPage />,
        },
        {
          path: "/recipients",
          element: <RecipientsPage />,
        },
        {
          path: "/groups",
          element: <GroupsPage />,
        },
      ]
    },
  ])


  return (
    <RouterProvider router={router} />
  );
}
  
export default App;