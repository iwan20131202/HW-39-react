import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SearchLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

const fieldStyles = `
  padding: 11px 14px;
  font: inherit;
  color: var(--text);
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-soft);
  }
`;

export const SearchInput = styled.input`
  ${fieldStyles}
`;

export const SortSelect = styled.select`
  ${fieldStyles}
`;
