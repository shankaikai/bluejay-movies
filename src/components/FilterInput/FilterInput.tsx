import { Dispatch } from "react";
import { Flex, Text } from "@mantine/core";
import { Filter } from "tabler-icons-react";
import GenreFilterInput from "./GenreFilter";
import YearFilterInput from "./YearFilter";
import { FilterType } from "../../hooks/useMoviesContext";

export interface FilterInputProps {
  setFilters?: Dispatch<FilterType[]>;
  filters: FilterType[];
  index?: number;
}

export default function FilterInput({
  setFilters,
  filters,
}: FilterInputProps): JSX.Element {
  return (
    <Flex direction="row" columnGap="sm" justify="center" align="center">
      <Filter size="2rem" />
      <Text>Filters: </Text>
      {filters.map((filter, index) => {
        switch (filter.type) {
          case "Genre":
            return (
              <GenreFilterInput
                setFilters={setFilters}
                filters={filters}
                filter={filter}
                index={index}
              />
            );
            break;

          case "Year":
            return (
              <YearFilterInput
                setFilters={setFilters}
                filters={filters}
                filter={filter}
                index={index}
              />
            );
            break;

          default:
            break;
        }
      })}
    </Flex>
  );
}
