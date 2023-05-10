import React from "react";
import { SimpleGrid } from "@mantine/core";

type MovieGridProps = {
  children: React.ReactNode;
};

export default function MoviesGrid({ children }: MovieGridProps): JSX.Element {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: "62rem", cols: 3, spacing: "md" },
        { maxWidth: "48rem", cols: 2, spacing: "sm" },
        { maxWidth: "36rem", cols: 1, spacing: "sm" },
      ]}
    >
      {children}
    </SimpleGrid>
  );
}
