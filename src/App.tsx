import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout/Layout";
import { MoviesProvider } from "./hooks/useMoviesContext";

export default function App(): JSX.Element {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/movie/:id",
          element: <MoviePage />,
        },
      ],
    },
    {
      path: "/*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <MoviesProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </MoviesProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
