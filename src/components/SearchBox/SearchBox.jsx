import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFilter, setSortOrder } from "../../redux/contactsSlice";
import { getFilter, getSortOrder } from "../../redux/selectors";

import {
  SearchWrapper,
  Group,
  SearchLabel,
  SearchInput,
  SortSelect,
} from "./SearchBox.styled";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const searchId = useId();
  const sortId = useId();

  const filter = useSelector(getFilter);
  const sortOrder = useSelector(getSortOrder);

  return (
    <SearchWrapper>
      <Group>
        <SearchLabel htmlFor={searchId}>Find contacts by name</SearchLabel>
        <SearchInput
          id={searchId}
          type="text"
          value={filter}
          onChange={(event) => dispatch(setFilter(event.target.value))}
        />
      </Group>

      <Group>
        <SearchLabel htmlFor={sortId}>Sort by name</SearchLabel>
        <SortSelect
          id={sortId}
          value={sortOrder}
          onChange={(event) => dispatch(setSortOrder(event.target.value))}
        >
          <option value="asc">A–Z</option>
          <option value="desc">Z–A</option>
        </SortSelect>
      </Group>
    </SearchWrapper>
  );
};
