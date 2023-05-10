import React from "react";
import useMovieQuery from "../hooks/useMovieQuery";
import Layout from "../components/Layout/Layout";

export default function HomePage(): JSX.Element {
  const { isLoading, data, error } = useMovieQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <Layout>Hi</Layout>;
}
