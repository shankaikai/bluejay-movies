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
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "movie/:id",
      element: (
        <Layout>
          <MoviePage />
        </Layout>
      ),
      errorElement: <ErrorPage />,
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
          <RouterProvider router={router} />
        </MoviesProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
