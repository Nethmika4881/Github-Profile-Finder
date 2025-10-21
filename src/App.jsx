import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import Home from "./pages/Home";
import DetailsDisplay from "./pages/DetailsDisplay";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details",
      element: <DetailsDisplay />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  );
}

export default App;
