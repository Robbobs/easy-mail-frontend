import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { authLoader } from "./pages/loaders/authLoader";
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
        { index: true, element: <HomePage /> },
        { path: "/signIn", element: <SignInPage /> },
        { path: "/signUp", element: <SignUpPage /> },
        { path: "/recipients", element: <RecipientsPage />, loader: authLoader },
        { path: "/groups", element: <GroupsPage />, loader: authLoader },
      ]
    },
  ])


  return (
    <RouterProvider router={router} />
  );
}
  
export default App;