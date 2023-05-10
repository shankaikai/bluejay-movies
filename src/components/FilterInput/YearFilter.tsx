import { Button, Flex, Popover, TextInput } from "@mantine/core";
import React from "react";

export default function YearFilter(): JSX.Element {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Release Year</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Flex columnGap="sm" direction="row">
          <TextInput label="From" />
          <TextInput label="To" />
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
}
