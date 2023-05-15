import { Dispatch } from "react";
import { Button, MultiSelect, Popover } from "@mantine/core";
import { Genre } from "../../helpers/filterMovies";
import { FilterType, GenreFilter } from "../../hooks/useMoviesContext";
import _ from "lodash";

const genreData: Genre[] = [
  "Action",
  "Animation",
  "Comedy",
  "Adventure",
  "Fantasy",
];

interface GenreFilterProps {
  setFilters?: Dispatch<FilterType[]>;
  filters: FilterType[];
  filter: GenreFilter;
  index: number;
}

export default function GenreFilterInput({
  setFilters,
  filters,
  filter,
  index,
}: GenreFilterProps): JSX.Element {
  function handleChange(values: string[]) {
    const cloneFilters: FilterType[] = _.cloneDeep(filters);

    const newGenreFilter: GenreFilter = {
      type: "Genre",
      genres: values as Genre[],
    };

    cloneFilters[index] = newGenreFilter;
    setFilters && setFilters(cloneFilters);
  }

  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button color={filter.genres.length > 0 ? "blue" : "gray"}>
          Genre
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MultiSelect
          placeholder="Pick your favourites"
          data={genreData}
          value={filter.genres}
          onChange={(values) => handleChange(values)}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
