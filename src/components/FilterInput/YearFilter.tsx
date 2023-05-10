import { Button, Flex, NumberInput, Popover } from "@mantine/core";
import React from "react";
import { FilterInputProps } from "./FilterInput";

export default function YearFilter({
  setFilters,
  filters,
}: FilterInputProps): JSX.Element {
  const isActive =
    filters.startYear !== 1900 || filters.endYear !== new Date().getFullYear();

  function handleStartChange(year: number | "") {
    setFilters &&
      setFilters({
        ...filters,
        startYear: year as number,
      });
  }

  function handleEndChange(year: number | "") {
    setFilters &&
      setFilters({
        ...filters,
        endYear: year as number,
      });
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
            value={filters.startYear}
            onChange={(year) => handleStartChange(year)}
          />
          <NumberInput
            label="To"
            value={filters.endYear}
            onChange={(year) => handleEndChange(year)}
          />
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
}
