import { Dispatch } from "react";
import { Button, Flex, NumberInput, Popover } from "@mantine/core";
import { FilterType, YearFilter } from "../../hooks/useMoviesContext";
import _ from "lodash";

const DEFAULT_START_YEAR = 1900;
const DEFAULT_END_YEAR = new Date().getFullYear();
interface YearFilterProps {
  setFilters?: Dispatch<FilterType[]>;
  filters: FilterType[];
  filter: YearFilter;
  index: number;
}

export default function YearFilterInput({
  setFilters,
  filters,
  filter,
  index,
}: YearFilterProps): JSX.Element {
  const isActive =
    filter.startYear !== DEFAULT_START_YEAR ||
    filter.endYear !== new Date().getFullYear();

  function handleChange(year: number | "", type: "start" | "end") {
    if (
      typeof year == "number" &&
      year >= DEFAULT_START_YEAR &&
      year <= DEFAULT_END_YEAR
    ) {
      const cloneFilters: FilterType[] = _.cloneDeep(filters);

      const newYearFilter: YearFilter = {
        type: "Year",
        startYear: type === "start" ? year : filter.startYear,
        endYear: type === "end" ? year : filter.endYear,
      };

      cloneFilters[index] = newYearFilter;
      setFilters && setFilters(cloneFilters);
    }
  }

  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button color={isActive ? "blue" : "gray"}>Release Year</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Flex columnGap="sm" direction="row">
          <NumberInput
            label="From"
            value={filter.startYear}
            onChange={(year) => handleChange(year, "start")}
          />
          <NumberInput
            label="To"
            value={filter.endYear}
            onChange={(year) => handleChange(year, "end")}
          />
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
}
